import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import getName from './assist_func/name';

export default (generatePair) => {
  const playerName = getName('return name');

  let counterOfCorrectAnswers = 0;
  const needCountOfCorrectAnswer = 3;
  for (; counterOfCorrectAnswers < needCountOfCorrectAnswer; counterOfCorrectAnswers += 1) {
    const questionAndAnswer = generatePair();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const correctAnswer = String(cdr(questionAndAnswer));
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    } console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};
