function create_updated_collection(collection_a, object_b) {
  let temp = grouping_count(collection_a);
  temp.forEach(value => {
    console.log(value.key + ":" + value.count);
    object_b.value.forEach(element => {
        if (element.includes(value.key)) {
          let c = Math.floor(value.count/3);
          value.count-=c;
        }
      }
    );
  });
  return temp;
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

function handleSpec1(value, map) {
  let temp = value.split(":");
  map.push({
    key: temp[0],
    count: +temp[1]
  })
}

function handleSpec2(value, map) {
  let temp = value.split("-");
  map.push({
    key: temp[0],
    count: +temp[1]
  })
}

function commanHandle(map, value, collection) {
  let isExist = false;
  isExist = elementIsInMap(map, value, isExist);

  if (!isExist) {
    countSameElement(map, collection, value);
  }
}

function grouping_count(collection) {
  let map = [];
  collection.forEach((value) => {
    if (value.indexOf(":") !== -1){
      handleSpec1(value, map);
    } else if(value.indexOf("-") !== -1){
      handleSpec2(value, map);
    } else {
      commanHandle(map, value, collection);
    }
  });
  return map;
}

module.exports = create_updated_collection;
