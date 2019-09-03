#!/usr/bin/env node

import getProgression from './specifics/progression';
import isEven from './specifics/isEven';
import calc from './specifics/calc';
import gcd from './specifics/gcd';
import welcome from '../index';

export default (nameOfGame) => {
  switch (nameOfGame) {
    case 'brain-even':
      return isEven();
    case 'brain-calc':
      return calc();
    case 'brain-gcd':
      return gcd();
    case 'brain-progression':
      return getProgression();
    default:
      return welcome();
  }
};
