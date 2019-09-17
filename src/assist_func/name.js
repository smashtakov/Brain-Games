import readlineSync from 'readline-sync';

export default (marker) => {
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}!\n`);
  if (marker === 'return name') {
    return inputName;
  } return '';
};
