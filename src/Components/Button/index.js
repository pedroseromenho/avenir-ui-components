import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './style.module.scss';

function Button({
  text,
  type,
  icon,
  size,
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
  function buttonSizes(sizes) {
    switch (sizes) {
      case 'small':
        return s.container__small;
      case 'medium':
        return s.container__medium;
      case 'big':
        return s.container__big;
      default:
        return s.container__small;
    }
  }
  return (
    <button
      className={classNames(buttonTypes(type), buttonSizes(size))}
      type="button"
      tabIndex="0"
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  type: '',
  icon: '',
  size: '',
};

export default Button;
