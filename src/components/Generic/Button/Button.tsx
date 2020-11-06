import React, { memo } from 'react';
import './Button.css';

<<<<<<< HEAD
interface ButtonProps {
  className: string;
  onClick?: () => void;
  buttonTitle?: string;
}
=======
interface ButtonProps { className: string, onClick?: () => void, children: string }
>>>>>>> c2c061a... lint jsx -> tsx,

const Button = ({ className, onClick, children }: ButtonProps) => (
  <button type="button" className={`${className} btn`} onClick={onClick}>
<<<<<<< HEAD
    {buttonTitle}
=======
    {children}
>>>>>>> c2c061a... lint jsx -> tsx,
  </button>
);

export default memo(Button);
