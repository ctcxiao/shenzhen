'use strict';

function switch3(collection, i) {
  let temp3 = collection[i + 2];
  let temp2 = collection[i + 1];
  collection[i + 2] = collection[i];
  collection[i + 1] = temp3;
  collection[i] = temp2;
}

function rank_by_two_large_one_small(collection){
  collection.sort(compareNumbers);
  for(let i =0; i<collection.length-2; i+=3){
    switch3(collection, i);
  }
  return collection;
}

function compareNumbers(a, b) {
  return a - b;
}
module.exports = rank_by_two_large_one_small;
