export const payload = {
  description: "Requested postcode does not exist",
  url: "/v1/postcodes/FOO",
  query: {
    api_key: "<VALID_API_KEY>"
  },
  headers: {},
  httpStatus: 404,
  body: {
    code: 4040,
    message: "Postcode Not Found"
  }
};
