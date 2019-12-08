import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div
      type="text"
      name="display"
      value={result}
    />
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
