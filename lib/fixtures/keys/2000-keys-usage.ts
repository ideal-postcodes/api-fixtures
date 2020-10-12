/**
 * @hidden
 */
export const payload = {
  description: "API key recent usage statistics",
  url: "/v1/keys/<VALID_API_KEY>/usage",
  query: {
    user_token: "<USER_TOKEN>",
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      start: "2020-09-21T09:11:15.074Z",
      end: "2020-10-12T09:11:15.074Z",
      total: 13174,
      dailyCount: [
        {
          date: "2020-10-12T00:00:00.000Z",
          count: 383,
        },
        {
          date: "2020-10-11T00:00:00.000Z",
          count: 6,
        },
        {
          date: "2020-10-10T00:00:00.000Z",
          count: 189,
        },
        {
          date: "2020-10-09T00:00:00.000Z",
          count: 577,
        },
        {
          date: "2020-10-08T00:00:00.000Z",
          count: 384,
        },
        {
          date: "2020-10-07T00:00:00.000Z",
          count: 2662,
        },
        {
          date: "2020-10-06T00:00:00.000Z",
          count: 384,
        },
        {
          date: "2020-10-05T00:00:00.000Z",
          count: 1707,
        },
        {
          date: "2020-10-04T00:00:00.000Z",
          count: 6,
        },
        {
          date: "2020-10-02T00:00:00.000Z",
          count: 384,
        },
        {
          date: "2020-10-01T00:00:00.000Z",
          count: 577,
        },
        {
          date: "2020-09-30T00:00:00.000Z",
          count: 384,
        },
        {
          date: "2020-09-29T00:00:00.000Z",
          count: 384,
        },
        {
          date: "2020-09-28T00:00:00.000Z",
          count: 573,
        },
        {
          date: "2020-09-27T00:00:00.000Z",
          count: 6,
        },
        {
          date: "2020-09-25T00:00:00.000Z",
          count: 1329,
        },
        {
          date: "2020-09-24T00:00:00.000Z",
          count: 573,
        },
        {
          date: "2020-09-23T00:00:00.000Z",
          count: 384,
        },
        {
          date: "2020-09-22T00:00:00.000Z",
          count: 1900,
        },
        {
          date: "2020-09-21T00:00:00.000Z",
          count: 382,
        },
      ],
    },
    code: 2000,
    message: "Success",
  },
};
