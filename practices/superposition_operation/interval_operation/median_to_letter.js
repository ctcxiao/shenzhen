'use strict';

function calculateMedian(collection) {
  let min = collection.sort()[0];
  let max = collection.sort()[collection.length - 1];
  return Math.ceil((min + max) / 2);
}

function median_to_letter(collection) {
  let temp = calculateMedian(collection);
  let count = Math.floor(temp/26);
  let which_letter = temp%26;
  return mapToLetter(count, which_letter);
}

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

module.exports = median_to_letter;
