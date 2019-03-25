/**
 * @hidden
 */
export const payload = {
  description: "Valid autocomplete request with Multiple Residence data",
  url: "/v1/autocomplete/addresses",
  query: {
    query: "10 cv4 7al",
    api_key: "<VALID_MR_API_KEY>"
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      hits: [
        {
          suggestion:
            "Room 10, Block 1 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906075"
          },
          udprn: 5770157,
          umprn: 50906075
        },
        {
          suggestion:
            "Room 10, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906234"
          },
          udprn: 5770157,
          umprn: 50906234
        },
        {
          suggestion:
            "Room 102, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906262"
          },
          udprn: 5770157,
          umprn: 50906262
        },
        {
          suggestion:
            "Room 107, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906267"
          },
          udprn: 5770157,
          umprn: 50906267
        },
        {
          suggestion:
            "Room 108, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906268"
          },
          udprn: 5770157,
          umprn: 50906268
        },
        {
          suggestion:
            "Room G, House 10 Whitefields, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51108025"
          },
          udprn: 5770157,
          umprn: 51108025
        },
        {
          suggestion:
            "Room I, House 10 Whitefields, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51108027"
          },
          udprn: 5770157,
          umprn: 51108027
        },
        {
          suggestion:
            "Room K, House 10 Whitefields, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51108029"
          },
          udprn: 5770157,
          umprn: 51108029
        },
        {
          suggestion:
            "Room L, House 10 Whitefields, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51108030"
          },
          udprn: 5770157,
          umprn: 51108030
        },
        {
          suggestion:
            "Room M, House 10 Whitefields, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/51108031"
          },
          udprn: 5770157,
          umprn: 51108031
        }
      ]
    },
    code: 2000,
    message: "Success"
  }
};
