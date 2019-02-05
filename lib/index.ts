import { postcodes } from "./fixtures/postcodes";
import { addresses } from "./fixtures/addresses";
import { autocomplete } from "./fixtures/autocomplete";
import { keys } from "./fixtures/keys";
import { udprn } from "./fixtures/udprn";
import { umprn } from "./fixtures/umprn";
import { errors } from "./fixtures/errors";

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

export interface HttpOptions {
  url: string;
  query?: StringMap;
  headers?: StringMap;
  method?: string;
  body?: object;
}

export interface StringMap {
  [key: string]: string;
}

export const fixtures = {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors,
};

