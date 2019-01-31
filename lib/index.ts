import { postcodes } from "./fixtures/postcodes";
import { addresses } from "./fixtures/addresses";
import { autocomplete } from "./fixtures/autocomplete";
import { keys } from "./fixtures/keys";
import { udprn } from "./fixtures/udprn";
import { umprn } from "./fixtures/umprn";

export const fixtures = {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors: {
    invalidKey: {},
    invalidUserToken: {},
    dailyLimitReached: {},
    dailyIpRateLimitReached: {},
    keyBalanceDepleted: {},
  }
}

