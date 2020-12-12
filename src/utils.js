const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGreatestCommonDivisor = (first, second) => {
  if (second === 0) {
    return first;
  }

  return getGreatestCommonDivisor(second, first % second);
};

export {
  getRandomInt,
  getRandomInRange,
  getGreatestCommonDivisor,
};
