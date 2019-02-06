import { Definition } from "../../lib/index";

const addresses: Definition[] = [
  {
    name: "2000-addresses",
    description: "Successful address query",
    url: "/v1/addresses",
    query: {
      query: "11 Westferry Circus",
      api_key: "<VALID_API_KEY>"
    },
    headers: {},
  },
  {

    name: "2000-addresses-mr",
    description: "Valid Multiple Residence address query",
    url: "/v1/addresses",
    query: {
      query: "10 cv4 7al",
      api_key: "<VALID_API_KEY>"
    },
    headers: {},
  },
  {
    name: "2000-addresses-empty",
    description: "Address query with no results",
    url: "/v1/addresses",
    query: {
      api_key: "<VALID_MR_API_KEY>",
      query: "bakirkoy"
    },
    headers: {},
  }
];

export default addresses;

