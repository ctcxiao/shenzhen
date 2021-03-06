function count_same_elements(collection) {
  //在这里写入代码
  let count = {};
  collection.map(parse).forEach(countObj => count.hasOwnProperty(countObj.key) ? count[countObj.key] += countObj.count : count[countObj.key] = countObj.count);
  return Object.keys(count).map(key => Object.create({name: key, summary: count[key]}));
}

function handleArray(element, index) {
  return {
    key: element.substring(0, index),
    count: parseInt(element.substring(index + 1, element.indexOf(']')))
  };
}

function checkSpec(element) {
  let index = element.indexOf('-');
  index = index === -1 ? element.indexOf(':') : index;
  return index;
}

function parse(element) {
  let index = checkSpec(element);
  if (index !== -1) {
    return {key: element.substring(0, index), count: parseInt(element.substring(index + 1))};
  } else if ((index = element.indexOf('[')) !== -1) {
    return handleArray(element, index);
  }
  return {key: element, count: 1}
}

module.exports = count_same_elements;
