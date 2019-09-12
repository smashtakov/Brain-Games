import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
import isEven from '../assist_func/check-even';
import runEngine from '../engine';

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber();
  return cons(number, (isEven(number) ? 'yes' : 'no'));
};

export default () => runEngine('brain-even', generateQuestionAndAnswer);
