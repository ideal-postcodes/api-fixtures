import { postcodes } from "./fixtures/postcodes";

export const fixtures = {
  postcodes,
  addresses: {
    success: {},
    empty: {},
  },
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

