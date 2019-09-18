import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
import runEngine from '../engine';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');

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
  const givenNumbers = `${first} ${second}`;
  const gcd = calculateGcd(first, second);
  return cons(givenNumbers, gcd);
};

export default () => runEngine(generateQuestionAndAnswer);
