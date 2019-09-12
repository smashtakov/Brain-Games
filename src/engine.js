// game engine which calculate count of correct answers(3) and output answer
// function getSpecifics does have name of game as argument and returns pair (question, answer)

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import getGreetingPhrase from './greetings';

export default (nameOfGame, generatePair) => {
  const playerName = getGreetingPhrase(nameOfGame);

  let counterOfCorrectAnswers = 0;
  const needOfCorrectAnswer = 3;
  while (counterOfCorrectAnswers < needOfCorrectAnswer && counterOfCorrectAnswers >= 0) {
    const questionAndAnswer = generatePair();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const correctAnswer = String(cdr(questionAndAnswer)); // string for compare result and answer
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      counterOfCorrectAnswers += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      counterOfCorrectAnswers = -1; // exit from cycle
    }
  }
  return (counterOfCorrectAnswers === needOfCorrectAnswer) ? (console.log(`Congratulations, ${playerName}!`)) : (console.log(`Let's try again, ${playerName}!`));
};
