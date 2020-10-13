/**
 * @hidden
 */
export const payload = {
  description: "Empty autocomplete request",
  url: "/v1/autocomplete/addresses",
  query: {
    api_key: "<VALID_API_KEY>",
    q: "uskudar",
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      hits: [],
    },
    code: 2000,
    message: "Success",
  },
};
