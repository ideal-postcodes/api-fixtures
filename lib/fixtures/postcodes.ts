import { payload as success } from "./postcodes/2000-postcodes_postcode";
import { payload as notFound } from "./postcodes/4040-postcodes_postcode";
import { payload as mrSuccess } from "./postcodes/2000-postcodes_postcode-mr";

export const postcodes = {
  success,
  notFound,
  multipleResidence: {
    success: mrSuccess,
  },
};

