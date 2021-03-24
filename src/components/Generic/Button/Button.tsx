import React, { ButtonHTMLAttributes, memo } from 'react';
import VariantBtn from './Button.types';
import buttonVariants from './Button.components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantButton: VariantBtn;
  onClick?: () => void;
  active: boolean;
}

const Button = ({ active, variantButton, onClick, children }: ButtonProps) => {
  const SelectedVariantBtn = buttonVariants[variantButton];

  return (
    <SelectedVariantBtn active={active} onClick={onClick}>
      {children}
    </SelectedVariantBtn>
  );
};

export default memo(Button);
