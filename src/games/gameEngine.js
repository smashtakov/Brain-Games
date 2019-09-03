#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import getGreetingPhrase from './greetings';
import getSpecifics from './specifics';

export default (nameOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(getGreetingPhrase(nameOfGame));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let counterOfCorrectAnswers = 0;
  const totalOfCorrectAnswer = 3;
  while (counterOfCorrectAnswers < totalOfCorrectAnswer && counterOfCorrectAnswers >= 0) {
    const questionAndAnswer = getSpecifics(nameOfGame);
    console.log(`Question: ${car(questionAndAnswer)}`);
    const result = String(cdr(questionAndAnswer));
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
      counterOfCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      counterOfCorrectAnswers = -1;
    }
  }
  if (counterOfCorrectAnswers === totalOfCorrectAnswer) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
