#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getNumber = () => Math.floor(Math.random() * 100);

const getResult = (number) => ((number % 2 === 0) ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countCorrect = 0;
  const correct = 3;
  while (countCorrect < correct && countCorrect >= 0) {
    const number = getNumber();
    const result = getResult(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
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
