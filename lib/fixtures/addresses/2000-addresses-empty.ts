export const payload = {
  description: "Address query with no results",
  url: "/v1/addresses?api_key=<VALID_API_KEY>&q=bakirkoy",
  query: {
    api_key: "<VALID_API_KEY>"
  },
  headers: {},
  httpStatus: 200,
  body: {
    "code": 2000,
    "message": "Success",
    "results": [
      {
        "total": 0,
        "limit": 10,
        "page":	0,
        "hits": []
      }
    ]
  }
}
