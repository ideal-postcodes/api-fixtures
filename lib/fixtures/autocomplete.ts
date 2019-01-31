import { payload as success } from "./autocomplete/2000-autocomplete";
import { payload as empty } from "./autocomplete/2000-autocomplete-empty";
import { payload as mrSuccess } from "./autocomplete/2000-autocomplete-mr";

export const autocomplete = {
  success,
  empty,
  multipleResidence: {
    success: mrSuccess,
  },
};

