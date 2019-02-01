import { payload as success } from "./postcodes/2000-postcodes";
import { payload as notFound } from "./postcodes/4040-postcodes";
import { payload as mrSuccess } from "./postcodes/2000-postcodes-mr";
import { Definition } from "../resource";

export const postcodes = {
  success,
  notFound,
  multipleResidence: {
    success: mrSuccess,
  },
};

export const definitions: Definition[] = [
  {
    name: "2000-postcodes",
    description: "Successful postcode resolution request",
    url: "/v1/postcodes/SW1A2AA",
    query: {
      api_key: "<VALID_API_KEY>"
    },
  },
];

