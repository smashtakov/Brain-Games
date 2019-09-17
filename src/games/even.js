import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
import runEngine from '../engine';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const objectOfQuestion = getRandomNumber(1, 100);
  const answer = isEven(objectOfQuestion) ? 'yes' : 'no';
  return cons(objectOfQuestion, answer);
};

export default () => runEngine(generateQuestionAndAnswer);
