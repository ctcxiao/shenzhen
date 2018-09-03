'use strict';

function createResult(map) {
  var result = "{ ";
  map.forEach((value, key) => {
    result += key + " : " + value + ", ";
  });
  result = result.substring(0, result.length - 2);
  result += " }";
  return eval('('+result+')');
}

function countSameElement(map, value) {
  if (map.has(value)) {
    let count = map.get(value);
    count++;
    map.set(value, count);
  } else {
    map.set(value, 1);
  }
}

function grouping_count(collection) {
  var map = new Map();
  collection.forEach((value) => {
    countSameElement(map, value);
  });
  return createResult(map);
}

module.exports = grouping_count;
