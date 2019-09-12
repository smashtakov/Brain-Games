#!/usr/bin/env node

import isEven from './specifics/even';
import getCalc from './specifics/calc';
import getGCD from './specifics/gcd';
import getProgression from './specifics/progression';
import isPrime from './specifics/prime';

// eslint-disable-next-line consistent-return
export default (nameOfGame) => {
  switch (nameOfGame) {
    case 'brain-even':
      return isEven();
    case 'brain-calc':
      return getCalc();
    case 'brain-gcd':
      return getGCD();
    case 'brain-progression':
      return getProgression();
    case 'brain-prime':
      return isPrime();
    default:
  }
};
