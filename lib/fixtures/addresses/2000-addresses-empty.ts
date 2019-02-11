/**
 * @hidden
 */
export const payload = {
  description: "Address query with no results",
  url: "/v1/addresses",
  query: {
    api_key: "<VALID_API_KEY>",
    query: "bakirkoy"
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      total: 0,
      limit: 10,
      page: 0,
      hits: []
    },
    code: 2000,
    message: "Success"
  }
};
