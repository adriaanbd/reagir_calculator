import operate from '../operate';

test('adds 2 + 2 to equal 4', () => {
  const result = operate(2, 2, '+');
  expect(result).toBe('4');
});

test('multiplies 2 * 2 to equal 4', () => {
  const result = operate(2, 2, 'X');
  expect(result).toBe('4');
});

test('substracts 2 - 2 to equal 0', () => {
  const result = operate(2, 2, '-');
  expect(result).toBe('0');
});

test('divides 2 ÷ 2 to equal 1', () => {
  const result = operate(2, 2, '÷');
  expect(result).toBe('1');
});

test('mod 2 % 2 to equal 0', () => {
  const result = operate(2, 2, '%');
  expect(result).toBe('0');
});
