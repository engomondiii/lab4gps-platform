import React from 'react';
import styles from '../../styles/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={`${styles.primaryButton} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Optional: Define prop types for better type checking
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
