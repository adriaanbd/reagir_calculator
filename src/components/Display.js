import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <input
      type="text"
      name="display"
      value={result || '0'}
      className="display"
      disabled
    />
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
