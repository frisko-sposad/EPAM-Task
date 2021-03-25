import React, { ButtonHTMLAttributes, memo } from 'react';
import VariantBtn from './Button.types';
import buttonVariants from './Button.variants';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantBtn;
  onClick?: () => void;
  active: boolean;
}

const Button = ({ active, variant, onClick, children }: ButtonProps) => {
  const SelectedVariantBtn = buttonVariants[variant];

  return (
    <SelectedVariantBtn active={active} onClick={onClick}>
      {children}
    </SelectedVariantBtn>
  );
};

export default memo(Button);
