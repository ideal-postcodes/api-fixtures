import { assert } from "chai";
import { Definition } from "../lib/index";
import { resourceDefinitions } from "../generate/definitions/index";

/**
 * EXPECTED_DEFINITIONS
 *
 * Insert expected definitions here
 */
const EXPECTED_DEFINITIONS: string[] = [
  "postcodes",
  "addresses",
  "autocomplete",
  "keys",
  "udprn",
  "umprn",
  "errors",
];

const isDefinition = (definition: Definition): void => {
  assert.isDefined(definition.name);
  assert.isDefined(definition.description);
  assert.isDefined(definition.url);
  assert.isDefined(definition.query);
};

const exportedResources = Object.keys(resourceDefinitions);

describe("Resource definition", () => {
  it("exports expected resource definitions", () => {
    EXPECTED_DEFINITIONS.forEach(resourceName => {
      assert.include(exportedResources, resourceName);
    });
  });

  exportedResources.forEach(resourceName => {
    describe(`for ${resourceName}`, () => {
      const definitions = resourceDefinitions[resourceName];
      it ("is exported", () => {
        definitions.forEach(isDefinition);
      });
    });
  });
});

