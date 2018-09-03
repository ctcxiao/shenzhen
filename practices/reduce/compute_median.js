'use strict';

function compute_median(collection) {
  collection.sort(compareNumbers);
  if (collection.length % 2 === 0){
    return (collection[Math.floor(collection.length/2)]+collection[Math.floor(collection.length/2)-1])/2;
  } else {
    return collection[Math.floor(collection.length/2)];
  }
}

function compareNumbers(a, b) {
  return a - b;
}

module.exports = compute_median;


