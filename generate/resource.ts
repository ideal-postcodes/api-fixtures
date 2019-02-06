import { Secrets, replaceSecrets } from "./util";
import { Definition, HttpOptions, StringMap } from "../lib/index";
import { HttpAgent, Fixture } from "./index";

interface Options {
  definitions: Definition[];
  httpAgent: HttpAgent;
  secrets: Secrets;
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
        Object.keys(query).forEach(key => (query[key] = replace(query[key])));
      }

      // Replace headers object
      if (headers !== undefined) {
        Object.keys(headers).forEach(
          key => (headers[key] = replace(headers[key]))
        );
      }
    });
  }

  /**
   * generateFixtures
   *
   * Retrieves data from live API via HTTP agent for all endpoint definitions
   */
  public generateFixtures(): Promise<Fixture[]> {
    const requests = this.definitions.map(def => this.httpAgent({ ...def }));
    const results = [];
    return Promise.all(requests)
      .then(responses => {
        return responses.map((response, i) => {
          const definition = this.definitions[i];
          return { ...response, definition };
        });
      });
  }
}

