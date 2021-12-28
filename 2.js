const invert = (obj) => {
  const keys = Object.keys(obj);

  return keys.reduce((accumulator, key) => {
    accumulator = {
      ...accumulator,
      [obj[key]]: key
    }
    return accumulator
  }, {});
}

console.log(invert({'a': 'some', 'b': 'object', 'c': 1}));