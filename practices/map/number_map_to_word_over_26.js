'use strict';

function handleMapWhenNumberUpperThan9(which_letter, result) {
  if (which_letter <= 9) {
    result += String.fromCharCode((which_letter + "").charCodeAt() + 48);
  } else {
    result += String.fromCharCode((9 + "").charCodeAt() + 48 + which_letter - 9);
  }
  return result;
}

function mapToLetter(count, which_letter) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += "a";
  }
  result = handleMapWhenNumberUpperThan9(which_letter, result);
  return result;
}

var number_map_to_word_over_26 = function(collection){
  return collection.map(function (value) {
    let count = Math.floor(value/26);
    let which_letter = value%26;
    return mapToLetter(count, which_letter);
  });
};

module.exports = number_map_to_word_over_26;
