/**
 * @hidden
 */
export const payload = {
  description: "Valid autocomplete request with Multiple Residence data",
  url: "/v1/autocomplete/addresses",
  query: {
    query: "10 cv4 7al",
    api_key: "<VALID_MR_API_KEY>",
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      hits: [
        {
          suggestion: "Room 1001, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104006",
          },
          udprn: 5770157,
          umprn: 51104006,
        },
        {
          suggestion: "Room 1002, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104007",
          },
          udprn: 5770157,
          umprn: 51104007,
        },
        {
          suggestion: "Room 1004, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104009",
          },
          udprn: 5770157,
          umprn: 51104009,
        },
        {
          suggestion: "Room 1006, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104011",
          },
          udprn: 5770157,
          umprn: 51104011,
        },
        {
          suggestion: "Room 1008, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104013",
          },
          udprn: 5770157,
          umprn: 51104013,
        },
        {
          suggestion: "Room 1011, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104016",
          },
          udprn: 5770157,
          umprn: 51104016,
        },
        {
          suggestion: "Room 1013, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104018",
          },
          udprn: 5770157,
          umprn: 51104018,
        },
        {
          suggestion: "Room 1016, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104021",
          },
          udprn: 5770157,
          umprn: 51104021,
        },
        {
          suggestion: "Room 1024, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104029",
          },
          udprn: 5770157,
          umprn: 51104029,
        },
        {
          suggestion: "Room 1025, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104030",
          },
          udprn: 5770157,
          umprn: 51104030,
        },
      ],
    },
    code: 2000,
    message: "Success",
  },
};
