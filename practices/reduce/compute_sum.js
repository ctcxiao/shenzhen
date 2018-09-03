'use strict';
const sum = (a,b)=>(a+b);

function calculate_elements_sum(collection) {
  return collection.reduce(sum);
}

module.exports = calculate_elements_sum;

