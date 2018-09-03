'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  var i = 0;
  var isExist = false;

  collection_a.forEach(function (value) {
      collection_b.forEach(function (value2) {
          if (value === value2){
            isExist = true;
          }
      });

      if (isExist){
        result[i] = value;
        i++;
      }

      isExist = false;
  });



  return result;
}

module.exports = choose_common_elements;
