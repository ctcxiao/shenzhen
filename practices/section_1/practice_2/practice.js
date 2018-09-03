function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(value => {
    let isExist = false;
    collection_b.forEach(element => {
        if (element.includes(value)) {
          isExist = true;
        }
      }
    );
    return isExist;
  });
}

module.exports = collect_same_elements;
