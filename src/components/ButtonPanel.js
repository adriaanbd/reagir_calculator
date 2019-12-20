import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;

  return (
    <div className="btn-panel">
      <div className="row">
        <Button symbol="AC" clickHandler={clickHandler} />
        <Button symbol="+/-" clickHandler={clickHandler} />
        <Button symbol="%" clickHandler={clickHandler} />
        <Button symbol="÷" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button symbol="7" clickHandler={clickHandler} />
        <Button symbol="8" clickHandler={clickHandler} />
        <Button symbol="9" clickHandler={clickHandler} />
        <Button symbol="X" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button symbol="4" clickHandler={clickHandler} />
        <Button symbol="5" clickHandler={clickHandler} />
        <Button symbol="6" clickHandler={clickHandler} />
        <Button symbol="-" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button symbol="1" clickHandler={clickHandler} />
        <Button symbol="2" clickHandler={clickHandler} />
        <Button symbol="3" clickHandler={clickHandler} />
        <Button symbol="+" clickHandler={clickHandler} />
      </div>
      <div className="row">
        <Button symbol="0" wide clickHandler={clickHandler} />
        <Button symbol="." clickHandler={clickHandler} />
        <Button symbol="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
