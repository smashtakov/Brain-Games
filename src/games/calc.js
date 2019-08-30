#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getSign = () => {
  if (Math.random() > 2 / 3) {
    return '*';
  } if (Math.random() > 1 / 3) {
    return '-';
  } return '+';
};

const getNumber = () => Math.floor(Math.random() * 100);

const getResult = (number1, sign, number2) => {
  if (sign === '+') {
    return number1 + number2;
  } if (sign === '-') {
    return number1 - number2;
  } return number1 * number2;
};

export default () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countCorrect = 0;
  const correct = 3;
  while (countCorrect < correct && countCorrect >= 0) {
    const number1 = getNumber();
    const number2 = getNumber();
    const sign = getSign();
    const result = getResult(number1, sign, number2);
    console.log(`Question: ${number1} ${sign} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer)) {
      console.log('Correct!');
      countCorrect += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      countCorrect = -1;
    }
  }
  if (countCorrect === correct) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
