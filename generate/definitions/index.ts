import { Definition } from "../../lib/index";

interface ResourceDefinition {
  [key: string]: Definition[];
}

// Import definitions
import postcodes from "../definitions/postcodes";
import addresses from "../definitions/addresses";
import autocomplete from "../definitions/autocomplete";
import keys from "../definitions/keys";
import udprn from "../definitions/udprn";
import umprn from "../definitions/umprn";
import errors from "../definitions/errors";

export const resourceDefinitions: ResourceDefinition = {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors,
};

