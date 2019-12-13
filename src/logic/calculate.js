import operate from './operate';

const OPERATORS = {
  AC: 'AC',
  '+': '+',
  '-': '-',
  X: 'X',
  '%': '%',
  '+/-': '+/-',
  '.': '.',
  '÷': '÷',
  '=': '=',
};

function calculate(calcData, btnName) {
  const { total, next, operator } = calcData;
  const symbol = OPERATORS[btnName];

  if (symbol) {
    if (symbol === 'AC') return { total: null, next: null, operator: null };
    if (symbol === '.') return { total: total + symbol, next: null, operator: null };
    if (symbol === '=') {
      if (!next || !operator) return {};
      return { total: operate(total, next, operator), next: null, operator: null };
    }
  }
  if (!next) return { ...calcData, next: btnName };
  if (next) return { ...calcData, next: next + btnName };
}

export default calculate;
