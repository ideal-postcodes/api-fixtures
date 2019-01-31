export const payload = {
  description: "Request not on URL whitelist",
  url: "/v1/postcodes/WC1A 2SE?api_key=<VALID_API_KEY>",
  query: {
    api_key: "<VALID_API_KEY>"
  },
  headers: {},
  httpStatus: 401,
  body: {
    code: 4011,
    message: "Requesting URL not on whitelist. For more information see http://ideal-postcodes.co.uk/documentation/response-codes#4011"
  }
}
