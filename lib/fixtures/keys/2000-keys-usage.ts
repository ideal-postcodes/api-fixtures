/**
 * @hidden
 */
export const payload = {
  description: "API key recent usage statistics",
  url: "/v1/keys/<VALID_API_KEY>/usage",
  query: {
    user_token: "<USER_TOKEN>"
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      start: "2019-05-14T07:49:49.941Z",
      end: "2019-06-04T07:49:49.941Z",
      total: 8353,
      dailyCount: [
        {
          date: "2019-06-04T00:00:00.000Z",
          count: 19
        },
        {
          date: "2019-06-03T00:00:00.000Z",
          count: 552
        },
        {
          date: "2019-06-02T00:00:00.000Z",
          count: 6
        },
        {
          date: "2019-05-31T00:00:00.000Z",
          count: 1472
        },
        {
          date: "2019-05-30T00:00:00.000Z",
          count: 556
        },
        {
          date: "2019-05-29T00:00:00.000Z",
          count: 556
        },
        {
          date: "2019-05-28T00:00:00.000Z",
          count: 188
        },
        {
          date: "2019-05-27T00:00:00.000Z",
          count: 924
        },
        {
          date: "2019-05-26T00:00:00.000Z",
          count: 6
        },
        {
          date: "2019-05-24T00:00:00.000Z",
          count: 920
        },
        {
          date: "2019-05-23T00:00:00.000Z",
          count: 188
        },
        {
          date: "2019-05-22T00:00:00.000Z",
          count: 188
        },
        {
          date: "2019-05-21T00:00:00.000Z",
          count: 916
        },
        {
          date: "2019-05-20T00:00:00.000Z",
          count: 192
        },
        {
          date: "2019-05-19T00:00:00.000Z",
          count: 6
        },
        {
          date: "2019-05-17T00:00:00.000Z",
          count: 734
        },
        {
          date: "2019-05-16T00:00:00.000Z",
          count: 188
        },
        {
          date: "2019-05-15T00:00:00.000Z",
          count: 556
        },
        {
          date: "2019-05-14T00:00:00.000Z",
          count: 186
        }
      ]
    },
    code: 2000,
    message: "Success"
  }
};
