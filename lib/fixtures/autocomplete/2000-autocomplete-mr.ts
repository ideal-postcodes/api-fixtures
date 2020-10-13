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
          suggestion: "Room 1014, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104019",
          },
          udprn: 5770157,
          umprn: 51104019,
        },
        {
          suggestion: "Room 1018, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104023",
          },
          udprn: 5770157,
          umprn: 51104023,
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
        {
          suggestion: "Room 1028, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104033",
          },
          udprn: 5770157,
          umprn: 51104033,
        },
        {
          suggestion: "Room 1042, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104047",
          },
          udprn: 5770157,
          umprn: 51104047,
        },
        {
          suggestion: "Room 1044, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104049",
          },
          udprn: 5770157,
          umprn: 51104049,
        },
        {
          suggestion: "Room 1045, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104050",
          },
          udprn: 5770157,
          umprn: 51104050,
        },
        {
          suggestion: "Room 1047, Heronbank, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51104052",
          },
          udprn: 5770157,
          umprn: 51104052,
        },
      ],
    },
    code: 2000,
    message: "Success",
  },
};
