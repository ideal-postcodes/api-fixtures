[![CircleCI](https://circleci.com/gh/ideal-postcodes/api-fixtures.svg?style=svg)](https://circleci.com/gh/ideal-postcodes/api-fixtures) [![Coverage Status](https://coveralls.io/repos/github/ideal-postcodes/api-fixtures/badge.svg?branch=master)](https://coveralls.io/github/ideal-postcodes/api-fixtures?branch=master)

# Ideal Postcodes HTTP API Fixtures

This javascript library provides HTTP API response data for api.ideal-postcodes.co.uk. This data is exported as `Fixture` objects, containing a JSON response body (`body`) and HTTP Status Code (`httpStatus`).

These test objects may be readily imported into a test suite to stub out test methods or API requests.

Automatically generated documentation can be found at: [https://ideal-postcodes.github.io/api-fixtures/](https://ideal-postcodes.github.io/api-fixtures/)

Fixture object defition can be found [here](https://ideal-postcodes.github.io/api-fixtures/interfaces/fixture.html)

## Available Fixtures

- `postcodes`
  - `success`
  - `notFound`
  - `multipleResidence`
    - `success`
- `addresses`
  - `success`
  - `empty`
  - `multipleResidence`
    - `success`
- `autocomplete`
  - `success`
  - `empty`
  - `multipleResidence`
    - `success`
- `keys`
  - `available`
  - `unavailble`
  - `invalid`
- `udprn`
  - `success`
  - `notFound`
- `umprn`
  - `success`
  - `notFound`
- `errors`
  - `invalidKey`
  - `invalidUrl`
  - `balanceDepleted`
  - `dailyLimitReached`
  - `dailyIpRateLimitReached`

## Example Usage

```bash
npm install @ideal-postcodes/api-fixtures
```

```javascript
import { postcodes } from "api-fixtures";

// Example for postcodes->success

console.log(postcodes.success);

{
  url: "/v1/postcodes/SW1A2AA",
  query: {
    api_key: "<VALID_API_KEY>"
  },
  headers: {},
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
        "sub_building_name": "",
        "po_box": "",
        "department_name": "",
        "organisation_name": "Prime Minister & First Lord Of The Treasury",
        "udprn": 23747771,
        "umprn": "",
        "postcode_type": "L",
        "su_organisation_indicator": "",
        "delivery_point_suffix": "1A",
        "line_1": "Prime Minister & First Lord Of The Treasury",
        "line_2": "10 Downing Street",
        "line_3": "",
        "premise": "10",
        "longitude": -0.127695,
        "latitude": 51.50354,
        "eastings": 530047,
        "northings": 179951,
        "country": "England",
        "traditional_county":
        "Greater London",
        "administrative_county": "",
        "postal_county": "London",
        "county": "London",
        "district": "Westminster",
        "ward": "St James's"
      }
    ]
  }
}

```

## License

Code is MIT

Data provided by API is for testing and integration purposes only for PAF Products

