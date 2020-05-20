import { assert } from "chai";
import {
  postcodes,
  addresses,
  autocomplete,
  keys,
  udprn,
  umprn,
  errors,
  address,
} from "../lib/index";

const isAddress = (address: any): void => {
  assert.isDefined(address.udprn);
  assert.isDefined(address.line_1);
};

const isFixture = (fixture: any): void => {
  assert.isDefined(fixture.description);
  assert.isDefined(fixture.url);
  assert.isDefined(fixture.query);
  assert.isDefined(fixture.headers);
  assert.isDefined(fixture.httpStatus);
  assert.isDefined(fixture.body);
};

describe("Fixtures", () => {
  it("exports postcodes fixtures", () => {
    isFixture(postcodes.success);
    isFixture(postcodes.notFound);
    isFixture(postcodes.multipleResidence.success);
  });

  it("exports addresses fixtures", () => {
    isFixture(addresses.success);
    isFixture(addresses.empty);
    isFixture(addresses.multipleResidence.success);
  });

  it("exports addresses fixtures", () => {
    isFixture(autocomplete.success);
    isFixture(autocomplete.empty);
    isFixture(autocomplete.multipleResidence.success);
  });

  it("exports keys fixtures", () => {
    isFixture(keys.check.available);
    isFixture(keys.check.unavailable);
    isFixture(keys.check.invalid);
    isFixture(keys.private.success);
    isFixture(keys.usage.success);
  });

  it("exports UDPRN fixtures", () => {
    isFixture(udprn.success);
    isFixture(udprn.notFound);
  });

  it("exports UMPRN fixtures", () => {
    isFixture(umprn.success);
    isFixture(umprn.notFound);
  });

  it("exports error fixtures", () => {
    isFixture(errors.invalidKey);
    isFixture(errors.invalidUrl);
    isFixture(errors.balanceDepleted);
    isFixture(errors.dailyLimitReached);
    isFixture(errors.dailyIpRateLimitReached);
  });

  it("exports addresses", () => {
    isAddress(address.england);
    isAddress(address.scotland);
    isAddress(address.wales);
    isAddress(address.northernIreland);
    isAddress(address.jersey);
    isAddress(address.guernsey);
    isAddress(address.isleOfMan);
  });
});
