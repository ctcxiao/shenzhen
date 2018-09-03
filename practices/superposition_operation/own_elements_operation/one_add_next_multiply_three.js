'use strict';
function one_add_next_multiply_three(collection){
  let temp = collection.map((value, index) => (value+collection[index+1])*3);
  temp.pop();
  return temp;
}
module.exports = one_add_next_multiply_three;
