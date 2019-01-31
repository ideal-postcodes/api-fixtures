import { postcodes } from "./fixtures/postcodes";
import { addresses } from "./fixtures/addresses";
import { autocomplete } from "./fixtures/autocomplete";
import { keys } from "./fixtures/keys";

export const fixtures = {
  postcodes,
  addresses,
  autocomplete,
  keys,
  umprn: {
    success: {},
    notFound: {},
  },
  udprn: {
    success: { },
    notFound: {},
  },
  errors: {
    invalidKey: {},
    invalidUserToken: {},
    dailyLimitReached: {},
    dailyIpRateLimitReached: {},
    keyBalanceDepleted: {},
  }
}

