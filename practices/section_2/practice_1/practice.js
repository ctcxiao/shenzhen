function count_same_elements(collection) {
  return grouping_count(collection);
}

function countSameElement(map, collection, value) {
  let count = 0;
  collection.forEach(value2 => {
    if (value2 === value){
      count++;
    }
  });
  map.push({
    key:value,
    count:count
  })
}

function elementIsInMap(map, value, isExist) {
  map.forEach(value2 => {
    if (value2.key === value) {
      isExist = true;
    }
  });
  return isExist;
}

function grouping_count(collection) {
  let map = [];
  collection.forEach((value) => {
    let isExist = false;
    isExist = elementIsInMap(map, value, isExist);

    if (!isExist){
      countSameElement(map, collection, value);
    }
  });
  return map;
}

module.exports = count_same_elements;
