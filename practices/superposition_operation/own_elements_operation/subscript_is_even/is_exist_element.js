'use strict';

var is_exist_element = function(collection,element){
  let index = collection.find((value, index) => {
    if (element === value){
      return index;
    }
  });

  return index % 2 !== 0;
};
module.exports = is_exist_element;
