import { postcodes } from "./fixtures/postcodes";
import { addresses } from "./fixtures/addresses";
import { autocomplete } from "./fixtures/autocomplete";

export const fixtures = {
  postcodes,
  addresses,
  autocomplete,
  keys: {
    check: {
      available: {},
      unavailable: {},
    },
    details: {
      success: {},
      notFound: {},
    }
  },
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

