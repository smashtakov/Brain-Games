import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

const getResult = (num1, num2, sign) => {
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

const signs = '+-*';
const generateQuestionAndAnswer = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 10);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const question = `${operand1} ${sign} ${operand2}`;
  const answer = String(getResult(operand1, operand2, sign));
  return cons(question, answer);
};

const ruleOfGame = 'What is the result of the expression?';
export default () => runEngine(ruleOfGame, generateQuestionAndAnswer);
