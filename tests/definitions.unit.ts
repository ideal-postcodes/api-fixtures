import { assert } from "chai";
import { Definition } from "../lib/index";

// Import definitions
import postcodes from "../generate/definitions/postcodes";
import addresses from "../generate/definitions/addresses";

const resources: Definition[][] = [
  postcodes,
  addresses,
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
