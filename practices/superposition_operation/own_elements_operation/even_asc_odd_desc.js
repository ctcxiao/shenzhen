'use strict';
var even_asc_odd_desc = function(collection){
    let odd = collection.filter(value => value%2===0);
    let even = collection.filter(value => value%2!==0);
    odd.sort(compareNumbers);
    even.sort(compareNumbers).reverse();
    return odd.concat(even);
};

function compareNumbers(a, b) {
  return a - b;
}
module.exports = even_asc_odd_desc;
