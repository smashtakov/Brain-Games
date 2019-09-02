#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getNumber = () => Math.floor(Math.random() * 100);

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
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countCorrect = 0;
  const correct = 3;
  while (countCorrect < correct && countCorrect >= 0) {
    const number1 = getNumber();
    const number2 = getNumber();
    const result = getResult(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
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
