import { assert } from "chai";
import { Resource } from "../generate/resource";
import { HttpAgent } from "../generate/index";
import { Definition, HttpOptions } from "../lib/index";

const HTTP_SUCCESS = 200;

const genHttpAgent = (body: {}): HttpAgent => {
  return options => {
    return new Promise((resolve, reject) => {
      const httpStatus = HTTP_SUCCESS;
      resolve({ body, httpStatus });
    });
  };
};

describe("Resource", () => {
  let resource: Resource;
  let secrets: Map<string, string>;
  let body: any;
  let definition: Definition;
  let httpAgent: HttpAgent;

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

    httpAgent = genHttpAgent(body);
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

    it ("permits undefined headers and querystring in definitions", () => {
      const definitions: Definition[] = [{
        name: "Foo",
        description: "Bar",
        url: "/test"
      }];
      const resource = new Resource({ definitions, httpAgent, secrets });
      const definition = resource.definitions[0];
      assert.isUndefined(definition.query);
      assert.isUndefined(definition.headers);
    });
  });

  describe("generate", () => {
    it ("produces a fixtures output", async () => {
      const [fixture] = await resource.generate();
      assert.deepEqual(fixture.body, body);
      assert.equal(fixture.httpStatus, HTTP_SUCCESS);
    });
  });
});

