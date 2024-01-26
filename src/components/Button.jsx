import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Button.css';
import { useMediaQuery } from '@react-hook/media-query';

/**
 * Основной компонент пользовательского взаимодействия
 */
// eslint-disable-next-line react/prop-types
export const Button = ({ backgroundColor, size, label, mode, isLink, to, ...props }) => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const calculateSize = isSmallScreen ? 'small' : size;
  const buttonMode = mode === 'primary' ? 'primary' : 'secondary';

  if (isLink) {
    return (
        <a
            href={to}
            className={['button', `button--${buttonMode}`, `button--${buttonMode}--${calculateSize}`].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
          {label}
        </a>
    );
  }

  return (
      <button
          type="submit"
          className={['button', `button--${buttonMode}`, `button--${buttonMode}--${calculateSize}`].join(' ')}
          style={backgroundColor && { backgroundColor }}
          {...props}
      >
        {label}
      </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  to: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  mode: 'primary',
  size: 'medium',
  isLink: true,
  onClick: undefined,
};
