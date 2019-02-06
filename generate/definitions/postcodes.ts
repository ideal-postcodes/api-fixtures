import { Definition } from "../../lib/index";

const postcodes: Definition[] = [
  {
    name: "2000-postcodes",
    description: "Successful postcode resolution request",
    url: "/v1/postcodes/SW1A2AA",
    query: {
      api_key: "<VALID_API_KEY>"
    },
  },
  {
    name: "2000-postcodes-mr",
    description: "Successful postcode resolution request with Multiple Residence enabled",
    url: "/v1/postcodes/CV47AL",
    query: {
      api_key: "<VALID_MR_API_KEY>"
    },
    headers: {},
  },
  {
    name: "4040-postcodes",
    description: "Requested postcode does not exist",
    url: "/v1/postcodes/FOO",
    query: {
      api_key: "<VALID_API_KEY>"
    },
    headers: {},
  },
];

export default postcodes;

