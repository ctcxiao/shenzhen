'use strict';

function createArray(number_b, number_a, temp) {
  if (number_b > number_a) {
    for (let i = number_a; i <= number_b; i++) {
      temp.push(i);
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      temp.push(i);
    }
  }
}

function generateResult(value, result) {
  let count = Math.floor(value / 26);
  let which_letter = value % 26;
  result.push(mapToLetter(count, which_letter));
}

function get_letter_interval(number_a, number_b) {
  let temp = [];
  let result = [];
  createArray(number_b, number_a, temp);

  temp.forEach(value => {
    generateResult(value, result);
  });

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

function handleMapWhenNumberUpperThan9(which_letter, result) {
  if (which_letter <= 9) {
    result += String.fromCharCode((which_letter + "").charCodeAt() + 48);
  } else {
    result += String.fromCharCode((9 + "").charCodeAt() + 48 + which_letter - 9);
  }
  return result;
}

module.exports = get_letter_interval;
