import React from 'react';
import './Button.css';

const Button = ({ className, onClick, children }) => (
  <button type="button" className={`${className} btn`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
