import { assert } from "chai";
import { Definition } from "../lib/index";
import { HttpResponse } from "../generate/index";
import { resolve } from "path";
import {
  toSecretName,
  replaceSecrets,
  loadSecrets,
  toString,
} from "../generate/util";

describe("Util", () => {
  describe("loadSecrets", () => {
    it ("loads .env secrets from path", () => {
      const path = resolve(__dirname);
      const secrets = loadSecrets(path);
      assert.equal(secrets.get("FOO"), "bar");
    });

    it ("throws an error if invalid path", () => {
      assert.throws(() => loadSecrets("foo"));
    });
  });

  describe("toSecretName", () => {
    it ("converts placeholder to secret name", () => {
      const placeholder = "<FOO>";
      assert.equal(toSecretName(placeholder), "FOO");
    });
  });

  describe("replaceSecrets", () => {
    it ("replaces placeholder with secrets in string", () => {
      const secrets: Map<string, string> = new Map([
        ["FOO", "foo"],
        ["BAR", "bar1"],
        ["BAZ", "baz2"],
      ]);
      const input = "<FOO>is<BAR> <QUUX>there<BAZ>secret here <FOO>";
      const expected = "fooisbar1 <QUUX>therebaz2secret here foo";
      const result = replaceSecrets(input, secrets);
      assert.equal(result, expected);
    });
  });

  describe("toString", () => {
    it ("writes a HttpFixture to ES6 string representation", () => {
      const definition: Definition = {
        name: "Foo",
        description: "description",
        query: {
          api_key: "foo"
        },
        url: "/v1/foo",
      };

      const fixture: HttpResponse = {
        body: { foo: "bar", baz: ["8"] },
        httpStatus: 200,
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
      assert.equal(expected, toString(fixture, definition));
    });
  });
});

