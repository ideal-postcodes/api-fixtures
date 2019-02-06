import { assert } from "chai";
import { resolve } from "path";

import {
  toSecretName,
  replaceSecrets,
  loadSecrets,
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
});
