import { Definition } from "../../lib/index";

const umprn: Definition[] = [
  {
    name: "2000-umprn",
    description: "UMPRN address retrieval",
    url: "/v1/umprn/50906066",
    query: {
      api_key: "<VALID_MR_API_KEY>"
    },
    headers: {},
  },
  {
    name: "4046-umprn",
    description: "UMPRN does not exist",
    url: "/v1/umprn/56908329",
    query: {
      api_key: "<VALID_MR_API_KEY>"
    },
    headers: {},
  },
];

export default umprn;

