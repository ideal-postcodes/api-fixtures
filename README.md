[![CircleCI](https://circleci.com/gh/ideal-postcodes/api-fixtures.svg?style=svg)](https://circleci.com/gh/ideal-postcodes/api-fixtures) [![Coverage Status](https://coveralls.io/repos/github/ideal-postcodes/api-fixtures/badge.svg?branch=master)](https://coveralls.io/github/ideal-postcodes/api-fixtures?branch=master)

# Ideal Postcodes HTTP API Fixtures

This JavaScript library provides HTTP API response data for api.ideal-postcodes.co.uk. Canned API responses are exported as [Fixture](https://ideal-postcodes.github.io/api-fixtures/interfaces/fixture.html) objects, containing a JSON response body (`body`) and HTTP Status Code (`httpStatus`).

These test objects may be readily imported into a test suite to stub out test methods or API requests.

Automatically generated documentation which outlines available fixtures can be found at [ideal-postcodes.github.io/api-fixtures](https://ideal-postcodes.github.io/api-fixtures/)

## Example Usage

```bash
npm install @ideal-postcodes/api-fixtures
```

```javascript
import { postcodes } from "@ideal-postcodes/api-fixtures";

// or 
// const { postcodes } = require("@ideal-postcodes/api-fixtures");

console.log(postcodes.success);

{
  url: "/v1/postcodes/SW1A2AA",
  httpStatus: 200,
  body: {
    "code": 2000,
    "message": "success",
    "results": [
      {
        "postcode": "SW1A 2AA",
        "postcode_inward": "2AA",
        "postcode_outward": "SW1A",
        "post_town": "LONDON",
        "dependant_locality": "",
        "double_dependant_locality": "",
        "thoroughfare": "Downing Street",
        "dependant_thoroughfare": "",
        "building_number": "10",
        "building_name": "",
        "department_name": "",
        "organisation_name": "Prime Minister & First Lord Of The Treasury",
        "udprn": 23747771,
        "umprn": "",
        "delivery_point_suffix": "1A",
        "line_1": "Prime Minister & First Lord Of The Treasury",
        "line_2": "10 Downing Street",
        "line_3": "",
        "premise": "10",
        //...etc
```

## Quick Reference

- [addresses](https://ideal-postcodes.github.io/api-fixtures/globals.html#addresses)
  - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#addresses.success)
  - [empty](https://ideal-postcodes.github.io/api-fixtures/globals.html#addresses.empty)
  - [multipleResidence](https://ideal-postcodes.github.io/api-fixtures/globals.html#addresses.multipleresidence)
    - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#addresses.multipleresidence.success)
- [autocomplete](https://ideal-postcodes.github.io/api-fixtures/globals.html#autocomplete)
  - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#autocomplete.success)
  - [empty](https://ideal-postcodes.github.io/api-fixtures/globals.html#autocomplete.empty)
  - [multipleResidece](https://ideal-postcodes.github.io/api-fixtures/globals.html#autocomplete.multipleresidence)
    - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#autocomplete.multipleresidence.success)
- [postcodes](https://ideal-postcodes.github.io/api-fixtures/globals.html#postcodes)
  - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#postcodes.success)
  - [notFound](https://ideal-postcodes.github.io/api-fixtures/globals.html#postcodes.notfound)
  - [multipleResidence](https://ideal-postcodes.github.io/api-fixtures/globals.html#postcodes.multipleresidence)
    - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#postcodes.multipleresidence.success)
- [keys](https://ideal-postcodes.github.io/api-fixtures/globals.html#keys)
  - [check](https://ideal-postcodes.github.io/api-fixtures/globals.html#keys.check)
    - [available](https://ideal-postcodes.github.io/api-fixtures/globals.html#keys.check.available)
    - [invalid](https://ideal-postcodes.github.io/api-fixtures/globals.html#keys.check.invalid)
    - [unavailable](https://ideal-postcodes.github.io/api-fixtures/globals.html#keys.check.unavailable)
- [udprn](https://ideal-postcodes.github.io/api-fixtures/globals.html#udprn)
  - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#udprn.success)
  - [notFound](https://ideal-postcodes.github.io/api-fixtures/globals.html#udprn.notfound)
- [umprn](https://ideal-postcodes.github.io/api-fixtures/globals.html#umprn)
  - [success](https://ideal-postcodes.github.io/api-fixtures/globals.html#umprn.success)
  - [notFound](https://ideal-postcodes.github.io/api-fixtures/globals.html#umprn.notfound)
- [errors](https://ideal-postcodes.github.io/api-fixtures/globals.html#errors)
  - [balanceDepleted](https://ideal-postcodes.github.io/api-fixtures/globals.html#errors.balancedepleted)
  - [dailyIpRateLimitReached](https://ideal-postcodes.github.io/api-fixtures/globals.html#errors.balancedepleted)
  - [dailyLimitReached](https://ideal-postcodes.github.io/api-fixtures/globals.html#errors.dailylimitreached)
  - [invalidKey](https://ideal-postcodes.github.io/api-fixtures/globals.html#errors.invalidkey)
  - [invalidUrl](https://ideal-postcodes.github.io/api-fixtures/globals.html#errors.invalidurl)

## License

Code is MIT

Data provided by API is for testing and integration purposes only for PAF Products

