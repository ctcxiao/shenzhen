'use strict';

function even_to_letter(collection) {
  var result = [];
  collection.forEach(function (value) {
    if(value % 2 === 0){
      handleMapWhenNumberUpperThan9(value, result);
    }
  });

  return result;
}

function handleMapWhenNumberUpperThan9(which_letter, result) {
  if (which_letter <= 9) {
    result.push(String.fromCharCode((which_letter + "").charCodeAt() + 48));
  } else {
    result.push(String.fromCharCode((9 + "").charCodeAt() + 48 + which_letter - 9));
  }
  return result;
}

module.exports = even_to_letter;
