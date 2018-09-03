'use strict';
var calculate_median = function(collection){
    let temp = collection.filter(value => value%2===0);
    let min = temp.sort(compareNumbers)[0];
    let max = temp[temp.length-1];
    return (max+min)/2;
};

function compareNumbers(a, b) {
  return a - b;
}

module.exports = calculate_median;
