import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

function Button({ text, type }) {
  function buttonTypes(types) {
    switch (types) {
      case 'primary':
        return s.container__primary;
      case 'secondary':
        return 's.container__secondary';
      default:
        return '';
    }
  }
  return (
    <button className={buttonTypes(type)}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
