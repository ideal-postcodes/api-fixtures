import { Definition } from "../../lib/index";

const autocomplete: Definition[] = [
  {
    name: "2000-autocomplete",
    description: "Valid autocomplete request",
    url: "/v1/autocomplete/addresses",
    query: {
      query: "87 Brompton Rd",
      api_key: "<VALID_API_KEY>"
    },
    headers: {},
  },
  {
    name: "2000-autocomplete-mr",
    description: "Valid autocomplete request with Multiple Residence data",
    url: "/v1/autocomplete/addresses",
    query: {
      query: "10 cv4 7al",
      api_key: "<VALID_MR_API_KEY>"
    },
    headers: {},
  },
  {
    name: "2000-autocomplete-empty",
    description: "Empty autocomplete request",
    url: "/v1/autocomplete/addresses",
    query: {
      api_key: "<VALID_API_KEY>",
      q: "uskudar",
    },
    headers: {},
  },
];

export default autocomplete;

