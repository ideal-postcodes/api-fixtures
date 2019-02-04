import {
  Secrets,
  replaceSecrets,
} from "./util";

import {
  format,
} from "prettier";

interface StringMap {
  [key: string]: string;
}

export interface HttpOptions {
  url: string;
  query?: StringMap;
  headers?: StringMap;
  method?: string;
  body?: {};
}

/**
 * Definition
 * @hidden
 *
 * Resource definitions. Describes an endpoint as well as how to extract
 * the data via the live API
 */
export interface Definition extends HttpOptions {
  name: string;
  description: string;
}

interface Options {
  definitions: Definition[];
  httpAgent: HttpAgent;
  secrets: Secrets;
}

export interface HttpResponse {
  httpStatus: number;
  body: any;
  definition: Definition;
}

export interface HttpAgent {
  (request: HttpOptions): Promise<HttpResponse>;
}

/**
 * Resource
 * @hidden
 *
 * Represents an API resource. A resource may consume multiple endpoint
 * definitions to extract live API data. Any sensitive artefacts, including
 * API Key, user token will be swapped in via a `Secrets` object
 */
export class Resource {
  readonly definitions: Definition[];
  private httpAgent: HttpAgent;

  constructor(options: Options) {
    const { definitions, httpAgent, secrets } = options;
    this.definitions = definitions;
    this.httpAgent = httpAgent;
    this.loadSecrets(secrets);
  }

  /**
   * Overwrites placeholders in definitions with secrets
   */
  private loadSecrets(secrets: Secrets): void {
    const replace = (val: string) => replaceSecrets(val, secrets);

    this.definitions.forEach(definition => {
      const { url, query, headers } = definition;

      definition.url = replace(url);

      // Replace query object
      if (query !== undefined) {
        Object.keys(query).forEach(key => query[key] = replace(query[key]));
      }

      // Replace headers object
      if (headers !== undefined) {
        Object.keys(headers).forEach(key => headers[key] = replace(headers[key]));
      }
    });
  }

  /**
   * generateFixtures
   *
   * Retrieves data from live API via HTTP agent for all endpoint definitions
   */
  public generateFixtures(): Promise<HttpResponse[]> {
    const requests = this.definitions.map(def => this.httpAgent({ ...def }));
    return Promise.all(requests);
  }
}

const DEFAULT_SPACING = 2;
const toJson = (o: {}): string => JSON.stringify(o, null, DEFAULT_SPACING);

/**
 * toString
 *
 * Writes a fixture HttpResponse to string
 */
export const toString = (fixture: HttpResponse): string => {
  const parser = "typescript";
  const { definition } = fixture;
  const result = `
    export const payload = {
      description: "${definition.description}",
      url: "${definition.url}",
      query: ${toJson(definition.query || {})},
      headers: ${toJson(definition.headers || {})},
      httpStatus: ${fixture.httpStatus},
      body: ${toJson(fixture.body)}
    };
  `;
        return format(result, { parser });
}

