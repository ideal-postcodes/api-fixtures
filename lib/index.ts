/**
 * Fixture
 *
 * Represents the essential data returned by an api.ideal-postcodes.co.uk (via `body` and `httpStatus` as well as the HTTP request used to retrieve the data (e.g. `url`, `query`)
 *
 * Note, secrets are redacted and added back in via environment variables when the fixtures are generated
 */
export interface Fixture {
  /**
   * Basic description of request
   */
  description: string;

  /**
   * url of request (relative to https://api.ideal-postcodes.co.uk/)
   */
  url: string;

  /**
   * HTTP request query string
   */
  query?: StringMap;

  /**
   * HTTP request headers
   */
  headers?: StringMap;

  /**
   * HTTP Method. Defaults to GET if not defined
   */
  method?: string;

  /**
   * JSON body of API Response
   */
  body?: any;

  /**
   * HTTP Status of API Response
   */
  httpStatus: number;
}

/**
 * Definition
 *
 * @hidden
 *
 * Resource definitions. Describes an endpoint as well as how to extract
 * the data via the live API
 */
export interface Definition extends HttpOptions {
  name: string;
  description: string;
}

/**
 * HttpOptions
 *
 * @hidden
 */
export interface HttpOptions {
  url: string;
  query?: StringMap;
  headers?: StringMap;
  method?: string;
  body?: object;
}

/**
 * StringMap
 *
 * @hidden
 */
export interface StringMap {
  [key: string]: string;
}

/**
 * Define Postcode Fixtures
 */

import { payload as pc_success } from "./fixtures/postcodes/2000-postcodes";
import { payload as pc_notFound } from "./fixtures/postcodes/4040-postcodes";
import { payload as pc_mrSuccess } from "./fixtures/postcodes/2000-postcodes-mr";

const postcodes = {
  success: pc_success,
  notFound: pc_notFound,
  multipleResidence: {
    success: pc_mrSuccess,
  },
};

/**
 * Define Address Fixtures
 */
import { payload as ad_success } from "./fixtures/addresses/2000-addresses";
import { payload as ad_empty } from "./fixtures/addresses/2000-addresses-empty";
import { payload as ad_mrSuccess } from "./fixtures/addresses/2000-addresses-mr";

export const addresses = {
  success: ad_success,
  empty: ad_empty,
  multipleResidence: {
    success: ad_mrSuccess,
  },
};

/**
 * Define Autocomplete Fixtures
 */
import { payload as au_success } from "./fixtures/autocomplete/2000-autocomplete";
import { payload as au_empty } from "./fixtures/autocomplete/2000-autocomplete-empty";
import { payload as au_mrSuccess } from "./fixtures/autocomplete/2000-autocomplete-mr";

export const autocomplete = {
  success: au_success,
  empty: au_empty,
  multipleResidence: {
    success: au_mrSuccess,
  },
};

/**
 * Define Keys Fixtures
 */
import { payload as ke_available } from "./fixtures/keys/2000-keys";
import { payload as ke_unavailable } from "./fixtures/keys/2000-keys-unavailable";
import { payload as ke_invalid } from "./fixtures/keys/4042-keys-invalid";

export const keys = {
  check: {
    available: ke_available,
    unavailable: ke_unavailable,
    invalid: ke_invalid,
  },
};

/**
 * Define UDPRN Fixtures
 */
import { payload as ud_success } from "./fixtures/udprn/2000-udprn";
import { payload as ud_notFound } from "./fixtures/udprn/4044-udprn";

export const udprn = {
  success: ud_success,
  notFound: ud_notFound,
};

/**
 * Define UMPRN Fixtures
 */
import { payload as um_success } from "./fixtures/umprn/2000-umprn";
import { payload as um_notFound } from "./fixtures/umprn/4046-umprn";

export const umprn = {
  success: um_success,
  notFound: um_notFound,
};

/**
 * Define Error Fixtures
 */
import { payload as er_invalidKey } from "./fixtures/errors/4010";
import { payload as er_invalidUrl } from "./fixtures/errors/4011";
import { payload as er_balanceDepleted } from "./fixtures/errors/4020";
import { payload as er_limitReached } from "./fixtures/errors/4021";

export const errors = {
  invalidKey: er_invalidKey,
  invalidUrl: er_invalidUrl,
  balanceDepleted: er_balanceDepleted,
  dailyLimitReached: er_limitReached,
  dailyIpRateLimitReached: er_limitReached,
};

export const fixtures = {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors,
};
