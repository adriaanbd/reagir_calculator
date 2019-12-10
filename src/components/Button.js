import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, symbol } = props;
  return (
    <input
      type="button"
      name={name}
      value={symbol}
      aria-label="symbol"
      className="btn"
    />
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Button;
