#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

const getNumber = () => Math.floor(Math.random() * 100);
const getDifference = () => Math.floor(Math.random() * 10);
const getPosition = () => Math.floor(Math.random() * 10);

export default () => {
  const firstNumber = getNumber(); // 1-99
  const difference = getDifference(); // 0-9
  const position = getPosition(); // 0-9 is a random position of lost number
  let counter = 0; // is a counter
  let sequence = '';
  let result = 0;
  while (counter < 10) { // 10 is a count of progression numbers
    if (counter === position) {
      sequence += '.. ';
      result = firstNumber + counter * difference; // value of lost number
    } else {
      sequence += `${firstNumber + counter * difference} `;
    }
    counter += 1;
  }
  return cons(sequence, result);
};
