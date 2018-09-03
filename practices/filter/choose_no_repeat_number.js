'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  var i = 0;
  var isExist = false;
  collection.forEach(function (value) {

     result.forEach(function (value2) {
        if (value2 === value){
          isExist = true;
        }
     });

     if (!isExist){
       result[i] = value;
       i++;
     }

     isExist = false;

  });

  return result;
}

module.exports = choose_no_repeat_number;
