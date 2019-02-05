import {
  HttpOptions,
  Definition,
} from "../lib/index";

export interface HttpAgent {
  (request: HttpOptions): Promise<HttpResponse>;
}

export interface HttpResponse {
  httpStatus: number;
  body: {};
}

export interface Fixture extends HttpResponse {
  definition: Definition;
}

