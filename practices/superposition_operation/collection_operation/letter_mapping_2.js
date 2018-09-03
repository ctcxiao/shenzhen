'use strict';

function average_to_letter(collection) {
  let average = compute_average(collection);
  return  handleMapWhenNumberUpperThan9(Math.ceil(average), "");
}

function handleMapWhenNumberUpperThan9(which_letter, result) {
  if (which_letter <= 9) {
    result+=(String.fromCharCode((which_letter + "").charCodeAt() + 48));
  } else {
    result+=(String.fromCharCode((9 + "").charCodeAt() + 48 + which_letter - 9));
  }
  return result;
}

const sum = (a,b)=>(a+b);

function compute_average(collection) {
  return collection.reduce(sum)/collection.length;
}

module.exports = average_to_letter;

