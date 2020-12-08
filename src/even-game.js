import readlineSync from 'readline-sync';

const ATTEMPTS = 3;
const MAX_NUMBER = 20;

const isEven = (num) => num % 2 === 0;

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * Math.floor(max));

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ATTEMPTS; i += 1) {
    const questionNumber = getRandomInt();
    const expectedAnswer = isEven(questionNumber) ? 'yes' : 'no';

    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
