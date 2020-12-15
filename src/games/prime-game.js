import getRandomInRange from '../get-random-in-range.js';

const MAX_NUMBER = 10;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  play() {
    const question = getRandomInRange(2, MAX_NUMBER);
    const expectedAnswer = isPrime(question) ? 'yes' : 'no';

    return { expectedAnswer, question };
  },
};
