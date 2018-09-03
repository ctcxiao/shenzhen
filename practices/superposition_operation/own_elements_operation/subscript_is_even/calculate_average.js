'use strict';

const sum = (a,b)=>a+b;
var calculate_average = function(collection){
  let temp = collection.filter(value => value%2===0);
  return collection.filter(value => value%2===0).reduce(sum)/temp.length;
};
module.exports = calculate_average;
