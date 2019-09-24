import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

const lengthOfProgression = 10;

const generateQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const hiddenElementPosition = getRandomNumber(1, lengthOfProgression);
  let sequence = '';
  const hiddenElement = String(first + hiddenElementPosition * difference);

  for (let counter = 0; counter < lengthOfProgression; counter += 1) {
    const space = ((counter === lengthOfProgression - 1) ? '' : ' ');
    if (counter === hiddenElementPosition) {
      sequence = `${sequence}..${space}`;
    } else {
      sequence = `${sequence}${first + counter * difference}${space}`;
    }
  }
  return cons(sequence, hiddenElement);
};

export default () => runEngine('Welcome to the Brain Games!\nWhat number is missing in the progression?\n', generateQuestionAndAnswer);
