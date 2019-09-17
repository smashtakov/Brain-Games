// game engine calculates count of correct answers(3)
import readlineSync from 'readline-sync';
import getName from './assist_func/name';
import { car, cdr } from '@hexlet/pairs';

export default (generatePair) => {
  const playerName = getName('return name');

  let counterOfCorrectAnswers = 0;
  const needCountOfCorrectAnswer = 3;
  while (counterOfCorrectAnswers < needCountOfCorrectAnswer && counterOfCorrectAnswers >= 0) {
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
  return (counterOfCorrectAnswers === needCountOfCorrectAnswer) ? (console.log(`Congratulations, ${playerName}!`)) : (console.log(`Let's try again, ${playerName}!`));
};
