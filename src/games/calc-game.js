import readline from 'readline-sync';

const MAX_NUMBER = 20;
const OPERATIONS = [
  { sign: '+', calculate(a, b) { return a + b; } },
  { sign: '-', calculate(a, b) { return a - b; } },
  { sign: '*', calculate(a, b) { return a * b; } },
];

const getRandomInt = (max = MAX_NUMBER) => Math.floor(Math.random() * Math.floor(max));

export default {
  description: 'What is the result of the expression?',
  play() {
    const firstNum = getRandomInt();
    const secondNum = getRandomInt();
    const operation = OPERATIONS[getRandomInt(OPERATIONS.length)];

    const question = `${firstNum} ${operation.sign} ${secondNum}`;
    const expectedAnswer = operation.calculate(firstNum, secondNum);

    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    return { expectedAnswer, userAnswer: Number(userAnswer) };
  },
};
