#!/usr/bin/env node

import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default (nameOfGame = 'brain-games') => {
  let greeting = 'Welcome to the Brain Games!\n';
  switch (nameOfGame) {
    case 'brain-even':
      greeting += 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'brain-calc':
      greeting += 'What is the result of the expression?';
      break;
    case 'brain-gcd':
      greeting += 'Find the greatest common divisor of given numbers.';
      break;
    case 'brain-progression':
      greeting += 'What number is missing in the progression?';
      break;
    case 'brain-prime':
      greeting += 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    default:
  }
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  if (greeting !== 'Welcome to the Brain Games!\n') {
    return name; // do not have return for default value
  }
};
