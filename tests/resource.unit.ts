import { assert } from "chai";

import {
  HttpOptions,
  HttpAgent,
  Resource,
  Definition,
} from "../lib/resource";

const HTTP_SUCCESS = 200;

const genHttpAgent = (definition: Definition, body: any): HttpAgent => {
  return options => {
    return new Promise((resolve, reject) => {
      const httpStatus = HTTP_SUCCESS;
      resolve({ body, httpStatus, definition });
    });
  };
};

describe("Resource", () => {
  let resource: Resource;
  let secrets: Map<string, string>;
  let body: any;
  let definition: Definition;

  beforeEach(() => {
    secrets = new Map([
      ["FOO", "secretfoo"],
      ["BAR", "secretbar"],
    ]);

    body = { foo: "bar" };

    definition = {
      name: "Test",
      description: "Description",
      query: {
        "api_key": "<BAR>",
        "query": "BAR",
      },
      headers: {
        "baz": "quux"
      },
      url: "/test/url/<FOO>",
    };

    const httpAgent = genHttpAgent(definition, body);
    resource = new Resource({ httpAgent, definitions: [definition], secrets });
  });

  describe("Instantiation", () => {
    it ("instantiates resource", () => {
      assert.isDefined(resource.definitions);
    });

    it ("writes out secrets", () => {
      const def = resource.definitions[0];
      const { query } = def;
      assert.isDefined(query);
      if (query !== undefined) {
        assert.equal(query.api_key, "secretbar");
        assert.equal(query.query, "BAR");
      }
      assert.equal(def.url, "/test/url/secretfoo");
    });
  });

  describe("generateFixtures", () => {
    it ("produces a fixtures output", async () => {
      const [fixture] = await resource.generateFixtures();
      assert.deepEqual(fixture.definition, definition);
      assert.deepEqual(fixture.body, body);
      assert.equal(fixture.httpStatus, HTTP_SUCCESS);
    });
  });
});
