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
      start: "2021-03-25T08:15:29.229Z",
      end: "2021-04-15T08:15:29.229Z",
      total: 13792,
      dailyCount: [
        {
          date: "2021-04-15T00:00:00.000Z",
          count: 4,
        },
        {
          date: "2021-04-14T00:00:00.000Z",
          count: 1026,
        },
        {
          date: "2021-04-13T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-04-12T00:00:00.000Z",
          count: 826,
        },
        {
          date: "2021-04-11T00:00:00.000Z",
          count: 6,
        },
        {
          date: "2021-04-09T00:00:00.000Z",
          count: 418,
        },
        {
          date: "2021-04-08T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-04-07T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-04-06T00:00:00.000Z",
          count: 1638,
        },
        {
          date: "2021-04-05T00:00:00.000Z",
          count: 824,
        },
        {
          date: "2021-04-04T00:00:00.000Z",
          count: 2454,
        },
        {
          date: "2021-04-02T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-04-01T00:00:00.000Z",
          count: 1638,
        },
        {
          date: "2021-03-31T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-03-30T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-03-29T00:00:00.000Z",
          count: 1642,
        },
        {
          date: "2021-03-28T00:00:00.000Z",
          count: 6,
        },
        {
          date: "2021-03-26T00:00:00.000Z",
          count: 414,
        },
        {
          date: "2021-03-25T00:00:00.000Z",
          count: 412,
        },
      ],
    },
    code: 2000,
    message: "Success",
  },
};
