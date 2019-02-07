import { HttpOptions } from "../lib/index"; 

export interface HttpAgent {
  (request: HttpOptions): Promise<HttpResponse>;
}

export interface HttpResponse {
  httpStatus: number;
  body: {};
}

