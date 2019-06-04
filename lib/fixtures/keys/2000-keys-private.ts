/**
 * @hidden
 */
export const payload = {
  description: "API Key query for private information",
  url: "/v1/keys/<VALID_API_KEY>",
  query: {
    user_token: "<USER_TOKEN>"
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      lookups_remaining: 0,
      daily_limit: {
        limit: null,
        consumed: 0
      },
      individual_limit: {
        limit: null,
        ipForwarding: false
      },
      allowed_urls: [],
      notifications: {
        emails: ["testapi@ideal-postcodes.co.uk"],
        enabled: true
      },
      automated_topups: {
        enabled: false
      },
      current_purchases: []
    },
    code: 2000,
    message: "Success"
  }
};
