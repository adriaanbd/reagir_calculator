import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, symbol, color, wide,
  } = props;
  const width = wide ? '50%' : '25%';
  const styles = { backgroundColor: color, width };
  return (
    <input
      type="button"
      name={name}
      value={symbol}
      aria-label="symbol"
      className="btn"
      style={styles}
    />
  );
}

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
