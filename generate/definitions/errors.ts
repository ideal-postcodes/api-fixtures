import { Definition } from "../../lib/index";

const errors: Definition[] = [
  {
    name: "4021",
    description: "Limit reached on key. Can apply to daily key limit or daily IP limit",
    url: "/v1/postcodes/UB69PR",
    query: {
      api_key: "<DAILY_LIMIT_NIL_KEY>"
    },
    headers: {},
  },
  {
    name: "4020",
    description: "Balance depleted",
    url: "/v1/postcodes/W22LG",
    query: {
      api_key: "<NO_BALANCE_KEY>"
    },
    headers: {},
  },
  {

    name: "4011",
    description: "Request not on URL whitelist",
    url: "/v1/postcodes/WC1A2SE",
    query: {
      api_key: "<URL_WHITELIST_KEY>"
    },
    headers: {},
  },
  {
    name: "4010",
    description: "Invalid API Key presented",
    url: "/v1/postcodes/WC1A2SE",
    query: {
      api_key: "<INVALID_API_KEY>"
    },
    headers: {},
  },
];

export default errors;

