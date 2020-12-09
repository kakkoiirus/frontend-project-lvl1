import readlineSync from 'readline-sync';

const MAX_NUMBER = 20;

const isEven = (num) => num % 2 === 0;

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * Math.floor(max));

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  play() {
    const questionNumber = getRandomInt();
    const expectedAnswer = isEven(questionNumber) ? 'yes' : 'no';

    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    return { expectedAnswer, userAnswer };
  },
};
