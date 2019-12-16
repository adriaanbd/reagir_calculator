import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState();
  const [operator, setOperator] = useState();

  function handleClick(btnName) {
    console.log(`Click Handler called with ${btnName}`);
  }

  return (
    <div className="calculator">
      <Display />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
