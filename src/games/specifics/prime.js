#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

const getNumber = () => Math.floor(Math.random() * 100);

// trial division algorithm
const getResult = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const number = getNumber();
  return cons(number, getResult(number));
};
