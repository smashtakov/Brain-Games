import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
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
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  return cons((`${number1} ${number2}`), calculateGcd(number1, number2));
};

export default () => runEngine('brain-gcd', generateQuestionAndAnswer);
