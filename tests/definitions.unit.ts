import { assert } from "chai";
import { Definition } from "../lib/index";

// Import definitions
import postcodes from "../generate/definitions/postcodes";
import addresses from "../generate/definitions/addresses";
import autocomplete from "../generate/definitions/autocomplete";
import keys from "../generate/definitions/keys";

const resources: Definition[][] = [
  postcodes,
  addresses,
  autocomplete,
  keys,
];

const isDefinition = (definition: Definition): void => {
  assert.isDefined(definition.name);
  assert.isDefined(definition.description);
  assert.isDefined(definition.url);
  assert.isDefined(definition.query);
};

describe("Resource definitions", () => {
  it("are exported", () => {
    resources.forEach(definitions => {
      definitions.forEach(isDefinition);
    });
  });
});
