const Big = require('big.js');

function operate(num1, num2, operator) {
  const [a, b] = [Big(num1), Big(num2)];
  let result;

  if (operator === '-') result = a.minus(b);
  if (operator === '+') result = a.plus(b);
  if (operator === '÷') result = a.div(b);
  if (operator === 'X') result = a.times(b);
  if (operator === '%') result = a.mod(b);

  return result.toString();
}

export default operate;
