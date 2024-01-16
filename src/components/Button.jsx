import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Button.css';
import { useMediaQuery } from '@react-hook/media-query';

/**
 * Primary UI component for user interaction
 */
// eslint-disable-next-line react/prop-types
export const Button = ({backgroundColor, size, label, mode, ...props }) => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const calculateSize = isSmallScreen ? 'small' : size;
  const buttonMode = mode === 'primary' ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={['button',`button--${buttonMode}`, `button--${buttonMode}--${calculateSize}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  mode: 'primary',
  size: 'medium',
  onClick: undefined,
};
