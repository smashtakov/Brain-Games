#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let countCorrect = 0;
  while (countCorrect < 3 && countCorrect >= 0) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      countCorrect += 1;
    } else {
      const otherAnswer = (number % 2 === 0) ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${otherAnswer}'.`);
      countCorrect = -1;
    }
  }
  if (countCorrect === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
