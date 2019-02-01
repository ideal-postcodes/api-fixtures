import { assert } from "chai";

import {
  toString,
  HttpOptions,
  HttpResponse,
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

  describe("toString", () => {
    it ("writes a HttpFixture to ES6 string represenation", () => {
      const fixture: HttpResponse = {
        body: { foo: "bar", baz: ["8"] },
        httpStatus: 200,
        definition: {
          name: "Foo",
          description: "description",
          query: {
            api_key: "foo"
          },
          url: "/v1/foo",
        }
      };
      const expected = `export const payload = {
  description: "description",
  url: "/v1/foo",
  query: {
    api_key: "foo"
  },
  headers: {},
  httpStatus: 200,
  body: {
    foo: "bar",
    baz: ["8"]
  }
};
`;
      assert.equal(expected, toString(fixture));
    });
  });
});


