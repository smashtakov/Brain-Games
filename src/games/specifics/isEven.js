#!/usr/bin/env node

import { cons } from '@hexlet/pairs';

const getNumber = () => Math.floor(Math.random() * 100);

export default () => {
  const number = getNumber();
  return cons(number, ((number % 2 === 0) ? 'yes' : 'no'));
};
