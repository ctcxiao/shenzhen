'use strict';

function calculate_elements_sum(collection, element) {
  return collection.findIndex(value => {return element === value});
}

module.exports = calculate_elements_sum;

