import { getRandomInt, getRandomInRange } from '../utils.js';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const MAX_START_NUMBER = 10;
const MAX_STEP_NUMBER = 10;
const HIDDEN_SYMBOL = '..';

const generateProgression = () => {
  const start = getRandomInt(MAX_START_NUMBER);
  const step = getRandomInRange(1, MAX_STEP_NUMBER);
  const progressionLength = getRandomInRange(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

export default {
  description: 'What number is missing in the progression?',
  play() {
    const progression = generateProgression();
    const hiddenPosition = getRandomInt(progression.length - 1);
    const expectedAnswer = progression[hiddenPosition];

    progression[hiddenPosition] = HIDDEN_SYMBOL;
    const question = `${progression.join(' ')}`;

    return { expectedAnswer: String(expectedAnswer), question };
  },
};
