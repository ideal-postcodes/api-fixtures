import { Definition } from "../../lib/index";

const udprn: Definition[] = [
  {
    name: "2000-udprn",
    description: "UDPRN address retrieval",
    url: "/v1/udprn/23747208",
    query: {
      api_key: "<VALID_API_KEY>"
    },
    headers: {},
  },
  {
    name: "4044-udprn",
    description: "UDPRN does not exist",
    url: "/v1/udprn/85753460",
    query: {
      api_key: "<VALID_API_KEY>"
    },
    headers: {},
  },
];

export default udprn;

