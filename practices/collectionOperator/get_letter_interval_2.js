'use strict';


function get_letter_interval(number_a, number_b) {
  let step = number_a > number_b ? -1 : 1;
  let arr = [];
  for (let i = number_a; i !== number_b; i += step) {
    arr.push(i);
  }
  arr.push(number_b);
  return arr.map(value => get_letter(value));
}

function get_letter(i) {
  i--;
  let letter = '';
  while (i >= 0) {
    letter = String.fromCharCode((97 + (i % 26))) + letter;
    i = parseInt(i / 26) - 1;
  }
  return letter;
}


module.exports = get_letter_interval;
