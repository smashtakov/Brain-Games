#!/usr/bin/env node

export default (nameOfGame) => {
  switch (nameOfGame) {
    case 'brain-even':
      return ('Answer "yes" if the number is even, otherwise answer "no".');
    case 'brain-calc':
      return ('What is the result of the expression?');
    case 'brain-gcd':
      return ('Find the greatest common divisor of given numbers.');
    case 'brain-progression':
      return ('What number is missing in the progression?');
    default:
      return ('Welcome to the Brain Games!');
  }
};
