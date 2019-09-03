#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

const getNumber = () => Math.floor(Math.random() * 100);

// Euclidean algorithm gcd
const getResult = (number1, number2) => {
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

export default () => {
  const number1 = getNumber();
  const number2 = getNumber();
  const result = getResult(number1, number2);
  return cons((`${number1} ${number2}`), result);
};
