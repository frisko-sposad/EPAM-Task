import React from 'react';
import style from './Button.module.css';

const Button = (props) => {  
  return (
    <button type="button" className={`${style[props.className]} ${style.btn}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
