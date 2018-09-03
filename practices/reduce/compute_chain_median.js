'use strict';

function compute_chain_median(collection) {
  var reg = new RegExp("->","g");
  var result = Array.from(collection.toString().replace(reg, " "),
      x=>{if (x!==" "){return x;}}).sort(compareNumbers);
  console.log(result);
  if (result.length % 2 === 0){
    return (result[Math.floor(result.length/2)]+result[Math.floor(result.length/2)-1])/2;
  } else {
    return result[Math.floor(result.length/2)];
  }
}

function compareNumbers(a, b) {
  return a - b;
}

module.exports = compute_chain_median;
