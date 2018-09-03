'use strict';

const sum = (a,b)=>(a+b);

function compute_average(collection) {
  return collection.reduce(sum)/collection.length;
}

module.exports = compute_average;

