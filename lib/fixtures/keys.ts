import { payload as available } from "./keys/2000-keys";
import { payload as unavailable } from "./keys/2000-keys-unavailable"
import { payload as invalid } from "./keys/4042-keys-invalid"

export const keys = {
  check: {
    available,
    unavailable,
    invalid,
  },
  details: {
    success: {},
    notFound: {},
  }
};

