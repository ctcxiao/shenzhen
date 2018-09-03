'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  var i = 0;
  collection.forEach(function (value) {
     if(!result.includes(value)){
       result[i] = value;
       i++;
     }
  });
  return result;
}

module.exports = choose_no_repeat_number;
