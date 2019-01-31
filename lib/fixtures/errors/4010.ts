export const payload = {
  description: "Invalid API Key presented",
  url: "/v1/postcodes/WC1A 2SE?api_key=<INVALID_API_KEY>",
  query: {
    api_key: "<INVALID_API_KEY>"
  },
  headers: {},
  httpStatus: 401,
  body: {
    code:	4010,
    message:	"Invalid Key. For more information see http://ideal-postcodes.co.uk/documentation/response-codes#4010"
  }
}
