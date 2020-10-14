import React from 'react';
import style from './Button.module.css';

const Button = ({className, onClick, children}) => {
  return (
    <button
      type="button"
      className={`${style[className]} ${style.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
