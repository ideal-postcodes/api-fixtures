import { assert } from "chai";

import { fixtures } from "../lib/index"
const {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors,
} = fixtures;

describe("Fixtures", () => {
  it ("exports fixtures module", () => {
    assert.isDefined(fixtures);
  });
});
