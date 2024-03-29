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
    if (symbol === 'AC') return { total: '0', next: null, operator: null };
    if (symbol === '=') {
      if (!next || !operator) return {};
      if (next === '0' || total === '0') return {};
      return { total: operate(total, next, operator), next: null, operator: null };
    }
    if (symbol === '+/-') {
      if (next) return { ...calcData, next: operate(-1, next, 'X') };
      if (total) return { ...calcData, total: operate(-1, total, 'X') };
      return {};
    }
    if (symbol === '.') {
      if (next && next.includes(symbol)) return {};
      if (next) return { ...calcData, next: next + symbol };
      if (total && total.includes(symbol)) return {};
      if (total) return { ...calcData, total: total + symbol };
      if (operator) return { ...calcData, next: next + symbol };
      return { ...calcData, total: `0${symbol}` };
    }

    if (operator) {
      if (!next) return { ...calcData, operator: symbol };
      return {
        total: operate(total, next, operator), next: null, operator: symbol,
      };
    }

    if (!next) return { ...calcData, operator: symbol };
    return { total: next, next: null, operator: btnName };
  }

  if (!next) return { ...calcData, next: btnName };
  if (next) return { ...calcData, next: next + btnName };


  throw Error('Something went wrong...');
}

export default calculate;
