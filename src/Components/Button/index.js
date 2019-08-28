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
  handleClick,
}) {
  function buttonTypes(types) {
    switch (types) {
      case 'outlined':
        return s.container__outlined;
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

  function buttonIconSizes(sizes) {
    switch (sizes) {
      case 'small':
        return s.container__iconSmall;
      case 'medium':
        return s.container__iconMedium;
      case 'big':
        return s.container__iconBig;
      default:
        return s.container__iconSmall;
    }
  }

  const iconButton = text === '';
  return (
    <button
      className={classNames(
        buttonTypes(type),
        buttonSizes(size),
        iconButton ? buttonIconSizes(size) : null,
      )}
      type="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyPress={handleClick}
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
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: '',
  type: '',
  icon: '',
  size: '',
};

export default Button;
