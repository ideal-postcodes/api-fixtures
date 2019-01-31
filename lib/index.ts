import { postcodes } from "./fixtures/postcodes";
import { addresses } from "./fixtures/addresses";

export const fixtures = {
  postcodes,
  addresses,
  autocomplete: {
    success: {},
    empty: {},
  },
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

