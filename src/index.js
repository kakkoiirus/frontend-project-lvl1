import readline from 'readline-sync';
import cli from './cli.js';

const ATTEMPTS = 3;

const startGame = (game) => {
  const userName = cli();
  console.log(game.description);
  for (let i = 0; i < ATTEMPTS; i += 1) {
    const roundOfGame = game.play();

    console.log(`Question: ${roundOfGame.question}`);
    const userAnswer = readline.question('Your answer: ');

    if (roundOfGame.expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${roundOfGame.expectedAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
