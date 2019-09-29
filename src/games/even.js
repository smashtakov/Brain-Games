import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => runEngine(ruleOfGame, generateQuestionAndAnswer);
