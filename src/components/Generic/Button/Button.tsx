import React from 'react';
import './Button.css';

interface ButtonProps { className: string, onClick?: () => void, buttonTitle?: string }

const Button = ({ className, onClick, buttonTitle }: ButtonProps) => (
  <button type="button" className={`${className} btn`} onClick={onClick}>
    {buttonTitle}    
  </button>
);

export default React.memo(Button);
