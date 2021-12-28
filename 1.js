const groupBy = (array, func) => {
  return array.reduce((accumulator, num) => {
    const key = func(num);

    if (accumulator.hasOwnProperty(key)) {
      accumulator[key].push(num)
      return accumulator;
    }

    accumulator = {
      ...accumulator,
      [key]: [num]
    }

    return accumulator;
  }, {});
}

console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor));