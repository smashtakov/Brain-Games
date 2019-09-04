#!/usr/bin/env node
// game engine which calculate count of correct answers(3) and output answer
// function getSpecifics does have name of game as argument and return pair (question, answer)

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import getGreetingPhrase from './greetings';
import getSpecifics from './specifics';

export default (nameOfGame) => {
  const name = getGreetingPhrase(nameOfGame);

  let counterOfCorrectAnswers = 0;
  const totalOfCorrectAnswer = 3;
  while (counterOfCorrectAnswers < totalOfCorrectAnswer && counterOfCorrectAnswers >= 0) {
    const questionAndAnswer = getSpecifics(nameOfGame); // getSpecifics return pair
    console.log(`Question: ${car(questionAndAnswer)}`);
    const result = String(cdr(questionAndAnswer)); // string for compare result and answer
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
      counterOfCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      counterOfCorrectAnswers = -1;
    }
  }
  return (counterOfCorrectAnswers === totalOfCorrectAnswer) ? (console.log(`Congratulations, ${name}!`)) : (console.log(`Let's try again, ${name}!`));
};
