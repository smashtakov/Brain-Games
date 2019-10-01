import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random-number';
import runEngine from '../engine';

// trial division algorithm
const isPrime = (num) => {
  if (num >= 2) {
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor += 1) {
      if (num % divisor === 0) {
        return false;
      }
    }
  } return num >= 2;
};

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => runEngine(description, generateQuestionAndAnswer);
