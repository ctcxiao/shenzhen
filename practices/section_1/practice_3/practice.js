function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(value => {
    let isExist = false;
    object_b.value.forEach(element => {
        if (element.includes(value)) {
          isExist = true;
        }
      }
    );
    return isExist;
  });
}

module.exports = collect_same_elements;
