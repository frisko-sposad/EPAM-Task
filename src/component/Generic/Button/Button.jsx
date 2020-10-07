import React from 'react';
import style from './Button.module.css';

const Button = (props) => {  
  return (
    <button type="button" className={`${style[props.btnStyle]} ${style.btn}`} onClick={props.btnClick}>
      {props.textBtn}
    </button>
  );
};

export default Button;
