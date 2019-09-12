import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import isPrimeNumber from '../check-prime';
import runEngine from '../engine';

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber();
  return cons(number, (isPrimeNumber(number) ? 'yes' : 'no'));
};

export default () => runEngine('brain-prime', generateQuestionAndAnswer);
