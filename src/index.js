import readline from 'readline-sync';

const ATTEMPTS_COUNT = 3;

const startGame = (game) => {
  const currentGame = game();
  console.log('Welcome to the Brain Games!');

  const userName = readline.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(currentGame.description);
  for (let i = 0; i < ATTEMPTS_COUNT; i += 1) {
    const roundOfGame = currentGame.play();

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
