'use strict';
function map_to_even(collection){
  return collection.map(function (value) {
    return value*2;
  });
}
module.exports = map_to_even;
