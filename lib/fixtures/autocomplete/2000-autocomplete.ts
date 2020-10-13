/**
 * @hidden
 */
export const payload = {
  description: "Valid autocomplete request",
  url: "/v1/autocomplete/addresses",
  query: {
    query: "87 Brompton Rd",
    api_key: "<VALID_API_KEY>",
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      hits: [
        {
          suggestion: "87 Brompton Road, Bradford, BD4",
          urls: {
            udprn: "/v1/udprn/1557794",
          },
          udprn: 1557794,
        },
        {
          suggestion: "87 Brompton Road, Southsea, PO4",
          urls: {
            udprn: "/v1/udprn/19201138",
          },
          udprn: 19201138,
        },
        {
          suggestion: "87 Brompton Farm Road, Rochester, ME2",
          urls: {
            udprn: "/v1/udprn/14841148",
          },
          udprn: 14841148,
        },
        {
          suggestion: "87 Brompton Road, Hamilton, Leicester, LE5",
          urls: {
            udprn: "/v1/udprn/28408866",
          },
          udprn: 28408866,
        },
        {
          suggestion: "Cadogan Contemporary, 87 Old Brompton Road, London, SW7",
          urls: {
            udprn: "/v1/udprn/23866308",
          },
          udprn: 23866308,
        },
        {
          suggestion: "87 Northallerton Road, Brompton, Northallerton, DL6",
          urls: {
            udprn: "/v1/udprn/7103600",
          },
          udprn: 7103600,
        },
      ],
    },
    code: 2000,
    message: "Success",
  },
};
