'use strict';

const average = (a,b)=>(a+b);

function compute_average(collection) {
  return collection.reduce(average)/collection.length;
}

module.exports = compute_average;

