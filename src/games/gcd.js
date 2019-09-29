import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

// Euclidean algorithm gcd
const calculateGcd = (number1, number2) => {
  const iter = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    if (num1 % num2 === 0) {
      return num2;
    } return iter(num2, num1 % num2);
  };
  return (number1 >= number2) ? iter(number1, number2) : iter(number2, number1);
};

const generateQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  const question = `${first} ${second}`;
  const answer = String(calculateGcd(first, second));
  return cons(question, answer);
};

const ruleOfGame = 'Find the greatest common divisor of given numbers';
export default () => runEngine(ruleOfGame, generateQuestionAndAnswer);
