#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

const getNumber = () => Math.floor(Math.random() * 100);
const getDifference = () => Math.floor(Math.random() * 10);
const getPosition = () => Math.floor(Math.random() * 10);

export default () => {
  const firstNumber = getNumber(); // 1-99
  const difference = getDifference(); // 0-9
  const position = getPosition(); // 0-9
  let acc = 0;
  let sequence = '';
  let result = 0;
  while (acc < 10) {
    if (acc === position) {
      sequence += '.. ';
      result = firstNumber + acc * difference;
    } else {
      sequence += `${firstNumber + acc * difference} `;
    }
    acc += 1;
  }
  return cons(sequence, result);
};
