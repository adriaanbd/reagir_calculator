import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    symbol, color, wide, clickHandler,
  } = props;
  const width = wide ? '50%' : '25%';
  const styles = { backgroundColor: color, width };
  return (
    <input
      type="button"
      value={symbol}
      onClick={() => clickHandler(symbol)}
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
  // name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
