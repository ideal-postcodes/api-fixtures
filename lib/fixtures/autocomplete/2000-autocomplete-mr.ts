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
            "Room 10, Block 3 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906342"
          },
          udprn: 5770157,
          umprn: 50906342
        },
        {
          suggestion:
            "Room 101, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906261"
          },
          udprn: 5770157,
          umprn: 50906261
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
            "Room 103, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906263"
          },
          udprn: 5770157,
          umprn: 50906263
        },
        {
          suggestion:
            "Room 103, Block 3 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906387"
          },
          udprn: 5770157,
          umprn: 50906387
        },
        {
          suggestion:
            "Room 104, Block 2 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906264"
          },
          udprn: 5770157,
          umprn: 50906264
        },
        {
          suggestion:
            "Room 104, Block 3 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906388"
          },
          udprn: 5770157,
          umprn: 50906388
        },
        {
          suggestion:
            "Room 105, Block 1 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906120"
          },
          udprn: 5770157,
          umprn: 50906120
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
            "Room 109, Block 1 Arthur Vick, Gibbet Hill Road, Coventry, CV4",
          urls: {
            udprn: "/v1/udprn/5770157",
            umprn: "/v1/umprn/50906124"
          },
          udprn: 5770157,
          umprn: 50906124
        }
      ]
    },
    code: 2000,
    message: "Success"
  }
};
