'use strict';

function double_to_one(collection) {
  var reg = new RegExp(",","g");
  return Array.from(collection.toString().replace(reg, "")).map(function (value) {
      return +value;
  })
}
module.exports = double_to_one;
