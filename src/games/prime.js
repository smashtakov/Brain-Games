import { cons } from '@hexlet/pairs';
import getRandomNumber from '../assist_func/random-number';
import runEngine from '../engine';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n');

// trial division algorithm
const isPrime = (num) => {
  const result = num > 2;
  if (result === true) {
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor += 1) {
      if (num % divisor === 0) {
        return !result;
      }
    }
  } return result;
};

const generateQuestionAndAnswer = () => {
  const objectOfQuestion = getRandomNumber(1, 100);
  const answer = isPrime(objectOfQuestion) ? 'yes' : 'no';
  return cons(objectOfQuestion, answer);
};

export default () => runEngine(generateQuestionAndAnswer);
