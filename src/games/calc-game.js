import { getRandomInt } from '../utils.js';

const MAX_NUMBER = 20;
const OPERATIONS = [
  { sign: '+', calculate(a, b) { return a + b; } },
  { sign: '-', calculate(a, b) { return a - b; } },
  { sign: '*', calculate(a, b) { return a * b; } },
];

export default {
  description: 'What is the result of the expression?',
  play() {
    const firstNum = getRandomInt(MAX_NUMBER);
    const secondNum = getRandomInt(MAX_NUMBER);
    const currentGameOperation = OPERATIONS[getRandomInt(OPERATIONS.length)];

    const question = `${firstNum} ${currentGameOperation.sign} ${secondNum}`;
    const expectedAnswer = currentGameOperation.calculate(firstNum, secondNum);

    return { expectedAnswer: String(expectedAnswer), question };
  },
};
