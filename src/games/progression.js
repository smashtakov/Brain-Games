import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
import runEngine from '../engine';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?\n');

const lengthOfProgression = 10;

const generateQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const positionOfHiddenElement = getRandomNumber(1, lengthOfProgression);
  let resultSequence = '';
  let hiddenElement = 0;

  for (let counter = 0; counter < lengthOfProgression; counter += 1) {
    if (counter === positionOfHiddenElement) {
      resultSequence = `${resultSequence} ..`;
      hiddenElement = first + counter * difference;
    } else {
      resultSequence = `${resultSequence} ${first + counter * difference}`;
    }
  }
  return cons(resultSequence, hiddenElement);
};

export default () => runEngine(generateQuestionAndAnswer);
