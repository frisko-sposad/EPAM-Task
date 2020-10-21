import React from 'react';
import './Button.css';

const Button = ({ className, onClick, children }) => {
  return (
    <button type="button" className={`${className} btn`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
