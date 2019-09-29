import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
export default (ruleOfGame, getQuestionAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${ruleOfGame}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let counterOfAnswers = 1; counterOfAnswers <= roundsCount; counterOfAnswers += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const correctAnswer = cdr(questionAndAnswer);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      break;
    }
    console.log(counterOfAnswers === roundsCount ? `Correct!\nCongratulations, ${playerName}!` : 'Correct!');
  }
};
