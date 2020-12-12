import { getRandomInt } from '../utils.js';

const MAX_NUMBER = 20;

const isEven = (num) => num % 2 === 0;

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  play() {
    const questionNumber = getRandomInt(MAX_NUMBER);
    const expectedAnswer = isEven(questionNumber) ? 'yes' : 'no';

    const question = `${questionNumber}`;

    return { expectedAnswer, question };
  },
};
