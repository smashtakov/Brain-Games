import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

const getSign = () => {
  const signs = '+-*';
  const index = Math.floor(Math.random() * signs.length);
  return signs[index];
};

const getResultOfCalculation = (number1, sign = '+', number2) => {
  switch (sign) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    default:
      return number1 + number2;
  }
};

const generateQuestionAndAnswer = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber(10); // 10 is a order of number for comfortable testing
  const sign = getSign();
  return cons((`${operand1} ${sign} ${operand2}`), getResultOfCalculation(operand1, sign, operand2));
};

export default () => runEngine('brain-calc', generateQuestionAndAnswer);
