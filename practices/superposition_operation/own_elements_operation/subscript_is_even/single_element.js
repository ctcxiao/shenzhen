'use strict';
var single_element = function(collection){
  let even_index = collection.filter((e, i)=> i % 2 === 1);
  let count = {};
  even_index.forEach(e => count.hasOwnProperty(e) ? count[e]++ : count[e] = 1);
  return even_index.filter(e => count[e] && count[e] === 1);
};
module.exports = single_element;
