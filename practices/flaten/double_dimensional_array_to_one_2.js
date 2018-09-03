'use strict';

function double_to_one(collection) {
  var reg = new RegExp(",", "g");
  var result = Array.from([]);
  Array.from(collection.toString().replace(reg, "")).map(function (value) {
    if (!result.includes(+value)) {
      return result.splice(result.length, 0, +value);
    }
  });
  return result;
}

module.exports = double_to_one;
