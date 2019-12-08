import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <button
      type="button"
      name={name}
      aria-label="symbol"
      className="btn"
    />
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
