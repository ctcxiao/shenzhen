'use strict';

const sum = (a,b)=>a+b;
function hybrid_operation(collection) {
  return collection.map(value => value*3+2).reduce(sum);
}

module.exports = hybrid_operation;

