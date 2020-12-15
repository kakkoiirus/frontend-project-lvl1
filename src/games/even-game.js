import getRandomInRange from '../get-random-in-range.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;

const isEven = (num) => num % 2 === 0;

export default () => ({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  play() {
    const questionNumber = getRandomInRange(MIN_NUMBER, MAX_NUMBER);
    const expectedAnswer = isEven(questionNumber) ? 'yes' : 'no';

    const question = String(questionNumber);

    return { expectedAnswer, question };
  },
});
