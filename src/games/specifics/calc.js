#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

const getSign = (random) => {
  if (random > 2 / 3) {
    return '*';
  } if (random > 1 / 3) {
    return '-';
  } return '+';
};

const getNumber = (order) => ((order === 'first') ? (Math.floor(Math.random() * 100)) : (Math.floor(Math.random() * 10)));

const getResult = (number1, sign, number2) => {
  if (sign === '+') {
    return number1 + number2;
  } if (sign === '-') {
    return number1 - number2;
  } return number1 * number2;
};

export default () => {
  const number1 = getNumber('first');
  const number2 = getNumber('second');
  const sign = getSign(Math.random());
  const result = getResult(number1, sign, number2);
  return cons((`${number1} ${sign} ${number2}`), result);
};
