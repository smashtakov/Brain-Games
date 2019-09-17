import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
import runEngine from '../engine';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');

const getSign = () => {
  const signs = '+-*';
  const index = getRandomNumber(0, 3);
  return signs[index];
};

const getResultOfCalculation = (num1, sign, num2) => {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      return null;
  }
};

const generateQuestionAndAnswer = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 10);
  const sign = getSign();
  const expression = `${operand1} ${sign} ${operand2}`;
  const result = getResultOfCalculation(operand1, sign, operand2);
  return cons(expression, result);
};

export default () => runEngine(generateQuestionAndAnswer);
