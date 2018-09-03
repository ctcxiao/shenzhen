'use strict';

function calculate_elements_sum(collection, element) {
  collection.reverse();
  return collection.length - collection.findIndex(value => {return value === element}) - 1;
}

module.exports = calculate_elements_sum;
