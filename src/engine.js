import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';


const roundCount = 3;

export default (greeting, getQuestionAndAnswer) => {
  console.log(`${greeting}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  let counterOfAnswers = 0;
  let gameResult = `Congratulations, ${playerName}!`;
  for (; counterOfAnswers < roundCount; counterOfAnswers += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const correctAnswer = cdr(questionAndAnswer);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      gameResult = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
      break;
    } console.log('Correct!');
  }
  console.log(gameResult);
};
