'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  var i = 0;
  collection_a.forEach(function (value) {
    if (!collection_b.includes(value)){
      result[i] = value;
      i++;
    }
  });
  return result;
}

module.exports = choose_no_common_elements;
