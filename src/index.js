import cli from './cli.js';

const ATTEMPTS = 3;

const startGame = (game) => {
  const userName = cli();
  console.log(game.description);
  for (let i = 0; i < ATTEMPTS; i += 1) {
    const resultOfAttempt = game.play();

    if (resultOfAttempt.expectedAnswer === resultOfAttempt.userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${resultOfAttempt.userAnswer}" is wrong answer ;(. Correct answer was "${resultOfAttempt.expectedAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
