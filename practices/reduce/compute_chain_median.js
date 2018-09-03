'use strict';

function compute_chain_median(collection) {
  let temp = collection.split('->').map(e => parseInt(e));
  temp.sort(compareNumbers);
  if (temp.length % 2 === 0){
    return (temp[Math.floor(temp.length/2)]+temp[Math.floor(temp.length/2)-1])/2;
  } else {
    return temp[Math.floor(temp.length/2)];
  }
}

function compareNumbers(a, b) {
  return a - b;
}

module.exports = compute_chain_median;
