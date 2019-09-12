// trial division algorithm
export default (number) => {
  const result = number > 2;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return !result;
    }
  }
  return result;
};
