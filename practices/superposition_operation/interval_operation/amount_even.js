'use strict';

const sum = (a,b)=>a+b;
function amount_even(collection) {
  return collection.filter(value => value%2===0).reduce(sum);
}

module.exports = amount_even;
