#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const askName = () => {

console.log('Welcome to the Brain Games!');
const actual = readlineSync.question('May I have your name? ');
console.log('Hello, ' + actual + '!');
};
