import { getRandomInRange, getGreatestCommonDivisor } from '../utils.js';

const MAX_NUMBER = 50;

export default {
  description: 'Find the greatest common divisor of given numbers.',
  play() {
    const firstNum = getRandomInRange(1, MAX_NUMBER);
    const secondNum = getRandomInRange(1, MAX_NUMBER);

    const question = `${firstNum} ${secondNum}`;
    const expectedAnswer = getGreatestCommonDivisor(firstNum, secondNum);

    return { expectedAnswer: String(expectedAnswer), question };
  },
};
