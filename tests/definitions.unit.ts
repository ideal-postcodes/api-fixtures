import { assert } from "chai";
import { Definition } from "../lib/index";

// Import definitions
import postcodes from "../generate/definitions/postcodes";

const isDefinition = (definition: Definition): void => {
  assert.isDefined(definition.name);
  assert.isDefined(definition.description);
  assert.isDefined(definition.url);
  assert.isDefined(definition.query);
};

describe("Resource definitions", () => {
  describe("postcodes", () => {
    it("exports definitions", () => {
      postcodes.forEach(isDefinition);
    });
  });
});
