import getRandomInRange from '../get-random-in-range.js';

const MAX_NUMBER = 50;

const getGreatestCommonDivisor = (first, second) => {
  if (second === 0) {
    return first;
  }

  return getGreatestCommonDivisor(second, first % second);
};

export default () => ({
  description: 'Find the greatest common divisor of given numbers.',
  play() {
    const firstNum = getRandomInRange(1, MAX_NUMBER);
    const secondNum = getRandomInRange(1, MAX_NUMBER);

    const question = `${firstNum} ${secondNum}`;
    const expectedAnswer = getGreatestCommonDivisor(firstNum, secondNum);

    return { expectedAnswer: String(expectedAnswer), question };
  },
});
