import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div className="display">
      <div
        type="text"
        name="display"
        disabled
      />
      <span className="result">
        {result || '0'}
      </span>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
