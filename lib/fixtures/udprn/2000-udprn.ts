export const payload = {
  description: "UDPRN address retrieval",
  url: "/v1/udrpn/23747208?api_key=<VALID_API_KEY>",
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
        "postcode": "SW1A 0AA",
        "postcode_inward": "0AA",
        "postcode_outward": "SW1A",
        "post_town": "LONDON",
        "dependant_locality": "",
        "double_dependant_locality": "",
        "thoroughfare": "",
        "dependant_thoroughfare": "",
        "building_number": "",
        "building_name": "Houses Of Parliament",
        "sub_building_name": "",
        "po_box": "",
        "department_name": "",
        "organisation_name": "House Of Commons",
        "udprn": 23747208,
        "umprn": "",
        "postcode_type": "L",
        "su_organisation_indicator": "",
        "delivery_point_suffix": "1A",
        "line_1": "House Of Commons",
        "line_2": "Houses Of Parliament",
        "line_3": "",
        "premise": "Houses Of Parliament",
        "longitude": -0.124663,
        "latitude": 51.49984,
        "eastings": 530268,
        "northings": 179545,
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
