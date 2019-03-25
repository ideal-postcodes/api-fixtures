const {
  postcodes,
  addresses,
  autocomplete,
  udprn,
  umprn,
  keys,
} = require("@ideal-postcodes/api-fixtures");

// Print successful and unsuccesful postcode lookup
console.log(postcodes.success);
console.log(postcodes.notFound);

// Print successful address search
console.log(addresses.success);

// Print successful autocomplete request
console.log(autocomplete.success);
