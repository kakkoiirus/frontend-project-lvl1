import getRandomInRange from '../get-random-in-range.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;
const OPERATIONS = [
  { sign: '+', calculate(a, b) { return a + b; } },
  { sign: '-', calculate(a, b) { return a - b; } },
  { sign: '*', calculate(a, b) { return a * b; } },
];

export default () => ({
  description: 'What is the result of the expression?',
  play() {
    const firstNum = getRandomInRange(MIN_NUMBER, MAX_NUMBER);
    const secondNum = getRandomInRange(MIN_NUMBER, MAX_NUMBER);
    const currentOperation = OPERATIONS[getRandomInRange(MIN_NUMBER, OPERATIONS.length - 1)];

    const question = `${firstNum} ${currentOperation.sign} ${secondNum}`;
    const expectedAnswer = currentOperation.calculate(firstNum, secondNum);

    return { expectedAnswer: String(expectedAnswer), question };
  },
});
