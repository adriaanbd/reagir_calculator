import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const [total, setTotal] = useState();
  const [next, setNext] = useState();
  const [operator, setOperator] = useState();

  function handleClick(btnName) {
    const prevState = { total, next, operator };
    const newState = calculate(prevState, btnName);
    setTotal(newState.total);
    setNext(newState.next);
    setOperator(newState.operator);
  }

  return (
    <div className="calculator">
      <Display result={next || total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
