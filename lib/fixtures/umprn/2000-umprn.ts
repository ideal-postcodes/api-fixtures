export const payload = {
  description: "UMPRN address retrieval",
  url: "/v1/umprn/50906066",
  query: {
    api_key: "<VALID_MR_API_KEY>"
  },
  headers: {},
  httpStatus: 200,
  body: {
    result: {
      postcode: "CV4 7AL",
      postcode_inward: "7AL",
      postcode_outward: "CV4",
      post_town: "COVENTRY",
      dependant_locality: "",
      double_dependant_locality: "",
      thoroughfare: "Gibbet Hill Road",
      dependant_thoroughfare: "",
      building_number: "",
      building_name: "Block 1 Arthur Vick",
      sub_building_name: "Room 1",
      po_box: "",
      department_name: "",
      organisation_name: "",
      udprn: 5770157,
      umprn: 50906066,
      postcode_type: "S",
      su_organisation_indicator: "",
      delivery_point_suffix: "1A",
      line_1: "Room 1, Block 1 Arthur Vick",
      line_2: "Gibbet Hill Road",
      line_3: "",
      premise: "Room 1, Block 1 Arthur Vick",
      longitude: -1.564814,
      latitude: 52.38581,
      eastings: 429716,
      northings: 276509,
      country: "England",
      traditional_county: "Warwickshire",
      administrative_county: "",
      postal_county: "West Midlands",
      county: "West Midlands",
      district: "Coventry",
      ward: "Wainbody"
    },
    code: 2000,
    message: "Success"
  }
};
