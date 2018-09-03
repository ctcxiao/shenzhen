'use strict';

const sum = (a,b)=>a+b;
function average_uneven(collection) {
  let temp = collection.filter(value => value%2!==0);
  return collection.filter(value => value%2!==0).reduce(sum)/temp.length;
}

module.exports = average_uneven;
