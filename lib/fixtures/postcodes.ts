import { payload as success } from "./postcodes/2000-postcodes";
import { payload as notFound } from "./postcodes/4040-postcodes";
import { payload as mrSuccess } from "./postcodes/2000-postcodes-mr";

export const postcodes = {
  success,
  notFound,
  multipleResidence: {
    success: mrSuccess,
  },
};

