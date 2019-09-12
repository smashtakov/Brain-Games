import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

const generateQuestionAndAnswer = () => {
  const firstNumberOfProgression = getRandomNumber(); // 1-99
  const difference = getRandomNumber(10); // 0-9
  const positionOfHiddenNumber = getRandomNumber(10); // 0-9 is a random position of lost number
  const totalCountNumbersOfProgression = 10; // 10 is a count of progression numbers
  let counter = 0; // is a counter
  let resultSequence = '';
  let hiddenNumber = 0;

  while (counter < totalCountNumbersOfProgression) {
    if (counter === positionOfHiddenNumber) {
      resultSequence = `${resultSequence}.. `;
      hiddenNumber = firstNumberOfProgression + counter * difference; // value of hidden number
    } else {
      resultSequence = `${resultSequence}${firstNumberOfProgression + counter * difference} `;
    }
    counter += 1;
  }
  return cons(resultSequence, hiddenNumber);
};

export default () => runEngine('brain-progression', generateQuestionAndAnswer);
