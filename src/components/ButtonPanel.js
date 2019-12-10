import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="btn-panel">
      <div className="row">
        <Button symbol="AC" />
        <Button symbol="+/-" />
        <Button symbol="%" />
        <Button symbol="÷" />
      </div>
      <div className="row">
        <Button symbol="7" />
        <Button symbol="8" />
        <Button symbol="9" />
        <Button symbol="X" />
      </div>
      <div className="row">
        <Button symbol="4" />
        <Button symbol="5" />
        <Button symbol="6" />
        <Button symbol="-" />
      </div>
      <div>
        <Button symbol="1" />
        <Button symbol="2" />
        <Button symbol="3" />
        <Button symbol="+" />
      </div>
      <div className="row">
        <Button symbol="0" />
        <Button symbol="." />
        <Button symbol="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
