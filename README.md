<h1 align="center">
  <img src="https://img.ideal-postcodes.co.uk/API%20Fixtures%20Logo@3x.png" alt="Ideal Postcodes API Fixtures">
</h1>

> Static test fixtures generated from api.ideal-postcodes.co.uk

[![CircleCI](https://circleci.com/gh/ideal-postcodes/api-fixtures.svg?style=svg)](https://circleci.com/gh/ideal-postcodes/api-fixtures) 
[![Coverage Status](https://coveralls.io/repos/github/ideal-postcodes/api-fixtures/badge.svg?branch=master)](https://coveralls.io/github/ideal-postcodes/api-fixtures?branch=master)
[![Try on RunKit](https://badge.runkitcdn.com/@ideal-postcodes/api-fixtures.svg)](https://npm.runkit.com/@ideal-postcodes/api-fixtures)

This library provides static HTTP API response data for api.ideal-postcodes.co.uk as JSON objects. Canned API responses are exported as [Fixture](https://api-fixtures.ideal-postcodes.dev/interfaces/fixture.html) objects, containing a JSON response body (`body`) and HTTP Status Code (`httpStatus`).

Fixtures are periodically regenerated with live API requests from api.ideal-postcodes.co.uk.

We use it internally as an initial line of testing to mock HTTP requests and stub out API client function calls.

## Features

- Static, importable JSON response payloads generated from api.ideal-postcodes.co.uk (ideal for mock HTTP requests or stubbing API clients)
- HTTP request definition included
- Periodically regenerated from live API responses
- Typescript typings
- Detailed, low level fixture and type [documentation](https://api-fixtures.ideal-postcodes.dev/)

## Usage

- [Documentation](https://api-fixtures.ideal-postcodes.dev/)
- [Try on Runkit](https://npm.runkit.com/@ideal-postcodes/api-fixtures)

## Example

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

- [addresses](https://api-fixtures.ideal-postcodes.dev/globals.html#addresses)
  - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#addresses.success)
  - [empty](https://api-fixtures.ideal-postcodes.dev/globals.html#addresses.empty)
  - [multipleResidence](https://api-fixtures.ideal-postcodes.dev/globals.html#addresses.multipleresidence)
    - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#addresses.multipleresidence.success-1)
- [autocomplete](https://api-fixtures.ideal-postcodes.dev/globals.html#autocomplete)
  - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#autocomplete.success-1)
  - [empty](https://api-fixtures.ideal-postcodes.dev/globals.html#autocomplete.empty)
  - [multipleResidece](https://api-fixtures.ideal-postcodes.dev/globals.html#autocomplete.multipleresidence)
    - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#autocomplete.multipleresidence.success-1)
- [postcodes](https://api-fixtures.ideal-postcodes.dev/globals.html#postcodes)
  - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#postcodes.success)
  - [notFound](https://api-fixtures.ideal-postcodes.dev/globals.html#postcodes.notfound)
  - [multipleResidence](https://api-fixtures.ideal-postcodes.dev/globals.html#postcodes.multipleresidence)
    - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#postcodes.multipleresidence.success-1)
- [keys](https://api-fixtures.ideal-postcodes.dev/globals.html#keys)
  - [check](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.check)
    - [available](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.check.available)
    - [invalid](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.check.invalid)
    - [unavailable](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.check.unavailable)
  - [private](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.private)
    - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.private.success)
  - [usage](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.usage)
    - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#keys.usage.success)
- [udprn](https://api-fixtures.ideal-postcodes.dev/globals.html#udprn)
  - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#udprn.success)
  - [notFound](https://api-fixtures.ideal-postcodes.dev/globals.html#udprn.notfound)
- [umprn](https://api-fixtures.ideal-postcodes.dev/globals.html#umprn)
  - [success](https://api-fixtures.ideal-postcodes.dev/globals.html#umprn.success)
  - [notFound](https://api-fixtures.ideal-postcodes.dev/globals.html#umprn.notfound)
- [errors](https://api-fixtures.ideal-postcodes.dev/globals.html#errors)
  - [balanceDepleted](https://api-fixtures.ideal-postcodes.dev/globals.html#errors.balancedepleted)
  - [dailyIpRateLimitReached](https://api-fixtures.ideal-postcodes.dev/globals.html#errors.balancedepleted)
  - [dailyLimitReached](https://api-fixtures.ideal-postcodes.dev/globals.html#errors.dailylimitreached)
  - [invalidKey](https://api-fixtures.ideal-postcodes.dev/globals.html#errors.invalidkey)
  - [invalidUrl](https://api-fixtures.ideal-postcodes.dev/globals.html#errors.invalidurl)

## License

Code is MIT

Data provided by API is for testing and integration purposes only for PAF Products

