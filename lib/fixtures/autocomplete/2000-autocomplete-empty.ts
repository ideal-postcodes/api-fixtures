export const payload = {
  description: "Empty autocomplete request",
  url: "/v1/autocomplete/addresses?api_key=<VALID_API_KEY>&q=uskudar",
  query: {
    api_key: "<VALID_API_KEY>"
  },
  headers: {},
  httpStatus: 200,
  body: {
    "code": 2000,
    "message": "Success",
    "results": [{
      "hits": []
    }]
  }
}
