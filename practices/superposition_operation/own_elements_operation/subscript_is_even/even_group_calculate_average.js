'use strict';
const sum = (a,b)=>a+b;
var even_group_calculate_average = function(collection){

  let result = [];

  let To10 = collection.filter(value => (value<10&&value%2===0));
  let To100 = collection.filter(value => (value<100&&value%2===0));
  let To1000 = collection.filter(value => (value<1000&&value%2===0));

  if (To10.length){
    result.push(Math.floor(To10.reduce(sum)/To10.length));
  }

  if (To100.length){
    result.push(+(To100.reduce(sum)/To100.length).toFixed(0));
  }

  if (To1000.length){
    result.push(+(To1000.reduce(sum)/To1000.length).toFixed(0));
  }

  if (!To10.length && !To100.length && !To1000.length){
    result.push(0);
  }
  return result;
};
module.exports = even_group_calculate_average;
