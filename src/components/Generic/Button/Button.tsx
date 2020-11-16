import React, { memo } from 'react';
import './Button.css';

interface ButtonProps {
  className: string;
  onClick?: () => void;
  children: string;
}

const Button = ({ className, onClick, children }: ButtonProps) => (
  <button type="button" className={`${className} btn`} onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);
