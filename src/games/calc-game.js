import getRandomInRange from '../get-random-in-range.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;
const OPERATIONS = [
  { sign: '+', calculate(a, b) { return a + b; } },
  { sign: '-', calculate(a, b) { return a - b; } },
  { sign: '*', calculate(a, b) { return a * b; } },
];

export default {
  description: 'What is the result of the expression?',
  play() {
    const firstNum = getRandomInRange(MIN_NUMBER, MAX_NUMBER);
    const secondNum = getRandomInRange(MIN_NUMBER, MAX_NUMBER);
    const currentGameOperation = OPERATIONS[getRandomInRange(MIN_NUMBER, OPERATIONS.length - 1)];

    const question = `${firstNum} ${currentGameOperation.sign} ${secondNum}`;
    const expectedAnswer = currentGameOperation.calculate(firstNum, secondNum);

    return { expectedAnswer: String(expectedAnswer), question };
  },
};
