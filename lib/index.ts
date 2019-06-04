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
   * URL of request (relative to https://api.ideal-postcodes.co.uk/)
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

/**
 * API responses returned by the `/postcodes` API
 */
export const postcodes = {
  /**
   * Successful postcode request
   */
  success: pc_success,
  /**
   * Requested postcode does not exist
   */
  notFound: pc_notFound,
  /**
   * Multiple Residence API Responses
   */
  multipleResidence: {
    /**
     * Successful Multiple Residence postcode query
     */
    success: pc_mrSuccess,
  },
};

/**
 * Define Address Fixtures
 */
import { payload as ad_success } from "./fixtures/addresses/2000-addresses";
import { payload as ad_empty } from "./fixtures/addresses/2000-addresses-empty";
import { payload as ad_mrSuccess } from "./fixtures/addresses/2000-addresses-mr";

/**
 * API responses returned by the `/addresses` API
 */
export const addresses = {
  /**
   * Successful address query response
   */
  success: ad_success,
  /**
   * Address query returned no results
   */
  empty: ad_empty,
  /**
   * Multiple Residence API responses
   */
  multipleResidence: {
    /**
     * Successful Multiple Residence address query
     */
    success: ad_mrSuccess,
  },
};

/**
 * Define Autocomplete Fixtures
 */
import { payload as au_success } from "./fixtures/autocomplete/2000-autocomplete";
import { payload as au_empty } from "./fixtures/autocomplete/2000-autocomplete-empty";
import { payload as au_mrSuccess } from "./fixtures/autocomplete/2000-autocomplete-mr";

/**
 * API responses returned by the `/autocomplete` API
 */
export const autocomplete = {
  /**
   * Successful autocomplete request
   */
  success: au_success,
  /**
   * Autocomplet request with no suggestions
   */
  empty: au_empty,
  /**
   * Multiple Residence API responses
   */
  multipleResidence: {
    /**
     * Successful Multiple Residence autocomplete query
     */
    success: au_mrSuccess,
  },
};

/**
 * Define Keys Fixtures
 */
import { payload as ke_available } from "./fixtures/keys/2000-keys";
import { payload as ke_unavailable } from "./fixtures/keys/2000-keys-unavailable";
import { payload as ke_invalid } from "./fixtures/keys/4042-keys-invalid";
import { payload as ke_private_success } from "./fixtures/keys/2000-keys-private";
import { payload as ke_usage_success } from "./fixtures/keys/2000-keys-usage";

/**
 * API responses returned by the `/keys` API
 */
export const keys = {
  /**
   * API Key requests for public consumption (i.e. no `user_token` is presented)
   */
  check: {
    /**
     * Key available response
     */
    available: ke_available,
    /**
     * Key unavailable response
     */
    unavailable: ke_unavailable,
    /**
     * Invalid key requested
     */
    invalid: ke_invalid,
  },


  /**
   * API Key requests for private consumption (i.e. `user_token` is presented)
   */
  private: {
    /**
     * Private key details successfully extracted
     */
    success: ke_private_success,
  },

  /**
   * Private key usage successfully extracted
   */
  usage: {
    success: ke_usage_success,
  },
};

/**
 * Define UDPRN Fixtures
 */
import { payload as ud_success } from "./fixtures/udprn/2000-udprn";
import { payload as ud_notFound } from "./fixtures/udprn/4044-udprn";

/**
 * API responses returned by the `/udprn` API
 */
export const udprn = {
  /**
   * Successful UDPRN request
   */
  success: ud_success,

  /**
   * Requested UDPRN not found
   */
  notFound: ud_notFound,
};

/**
 * Define UMPRN Fixtures
 */
import { payload as um_success } from "./fixtures/umprn/2000-umprn";
import { payload as um_notFound } from "./fixtures/umprn/4046-umprn";

/**
 * API responses returned by the `/umprn` API
 */
export const umprn = {
  /**
   * Successful UMPRN request
   */
  success: um_success,

  /**
   * Requested UMPRN not found
   */
  notFound: um_notFound,
};

/**
 * Define Error Fixtures
 */
import { payload as er_invalidKey } from "./fixtures/errors/4010";
import { payload as er_invalidUrl } from "./fixtures/errors/4011";
import { payload as er_balanceDepleted } from "./fixtures/errors/4020";
import { payload as er_limitReached } from "./fixtures/errors/4021";

/**
 * Errors responses returned by API
 */
export const errors = {
  /**
   * Invalid API Key response
   */
  invalidKey: er_invalidKey,

  /**
   * Invalid requesting URL response
   */
  invalidUrl: er_invalidUrl,

  /**
   * API Key balance depleted response
   */
  balanceDepleted: er_balanceDepleted,

  /**
   * Maximum number of lookups performed on key today
   */
  dailyLimitReached: er_limitReached,

  /**
   * Maximum number of lookups performed on key for requesting IP address
   */
  dailyIpRateLimitReached: er_limitReached,
};
