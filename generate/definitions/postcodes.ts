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
];

export default postcodes;
