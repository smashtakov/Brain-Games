import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
export default (description, getQuestionAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const correctAnswer = cdr(questionAndAnswer);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
