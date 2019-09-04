#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

// get sign with random function help
const getSign = (mathRandom) => {
  if (mathRandom > 2 / 3) {
    return '*';
  } if (mathRandom > 1 / 3) {
    return '-';
  } return '+';
};

// first number 0-99, second number 0-9 for comfortable testing
const getNumber = (order) => ((order === 'first') ? (Math.floor(Math.random() * 100)) : (Math.floor(Math.random() * 10)));

const getResult = (number1, sign = '+', number2) => {
  switch (sign) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    default:
      return number1 + number2;
  }
};

export default () => {
  const number1 = getNumber('first');
  const number2 = getNumber('second');
  const sign = getSign(Math.random());
  const result = getResult(number1, sign, number2);
  return cons((`${number1} ${sign} ${number2}`), result);
};
