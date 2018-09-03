'use strict';

function removeEven(collection) {
  collection.forEach((value, index) => {
    if (value % 2 === 0) {
      collection.splice(index, 1);
    }
  });
}

function add3TimesAnd2ToOdd(collection) {
  collection.forEach((value, index) => {
    collection[index] = value * 3 + 2;
  });
}

function hybrid_operation_to_uneven(collection) {
  removeEven(collection);

  add3TimesAnd2ToOdd(collection);

  return collection;
}

module.exports = hybrid_operation_to_uneven;

