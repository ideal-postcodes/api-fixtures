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

const isFixture = (fixture: any): void => {
  assert.isDefined(fixture.description);
  assert.isDefined(fixture.url);
  assert.isDefined(fixture.query);
  assert.isDefined(fixture.headers);
  assert.isDefined(fixture.httpStatus);
  assert.isDefined(fixture.body);
};

describe("Fixtures", () => {
  it ("exports fixtures module", () => {
    assert.isDefined(fixtures);
  });

  it ("exports postcodes fixtures", () => {
    isFixture(postcodes.success);
    isFixture(postcodes.notFound);
    isFixture(postcodes.multipleResidence.success);
  });

  it ("exports addresses fixtures", () => {
    isFixture(addresses.success);
    isFixture(addresses.empty);
    isFixture(addresses.multipleResidence.success);
  });

  it ("exports addresses fixtures", () => {
    isFixture(autocomplete.success);
    isFixture(autocomplete.empty);
    isFixture(autocomplete.multipleResidence.success);
  });

  it ("exports keys fixtures", () => {
    isFixture(keys.check.available);
    isFixture(keys.check.unavailable);
    isFixture(keys.check.invalid);
  });

  it ("exports UDPRN fixtures", () => {
    isFixture(udprn.success);
    isFixture(udprn.notFound);
  });

  it ("exports UMPRN fixtures", () => {
    isFixture(umprn.success);
    isFixture(umprn.notFound);
  });

  it ("exports error fixtures", () => {
    isFixture(errors.invalidKey);
    isFixture(errors.invalidUrl);
    isFixture(errors.balanceDepleted);
    isFixture(errors.dailyLimitReached);
    isFixture(errors.dailyIpRateLimitReached);
  });
});
