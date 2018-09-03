'use strict';
var number_map_to_word = function(collection){
  return collection.map(function (value) {
    return String.fromCharCode((value+"").charCodeAt(0)+48);
  });
};

module.exports = number_map_to_word;
