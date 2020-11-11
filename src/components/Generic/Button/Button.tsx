import React, { ButtonHTMLAttributes, memo } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick?: () => void;
}

const Button = ({ className, onClick, children }: ButtonProps) => (
  <button type="button" className={`${className} btn`} onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);
