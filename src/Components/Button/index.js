import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

function Button({
  text,
  type,
  icon,
}) {
  function buttonTypes(types) {
    switch (types) {
      case 'primary':
        return s.container__primary;
      case 'secondary':
        return s.container__secondary;
      default:
        return s.container__default;
    }
  }
  return (
    <button
      className={buttonTypes(type)}
      type="button"
      tabIndex="0"
    >
      {icon}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
