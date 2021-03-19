import React, { ButtonHTMLAttributes, memo } from 'react';
import { StyledComponent } from 'styled-components';
import { BtnAction, SearchBtn, SearchByBtn, SortByBtn } from './Button.styled';
import { VariantBtn } from '../../App.types';

const variantsBtn: Record<VariantBtn, StyledComponent<'button', never, BtnAction>> = {
  [VariantBtn.Search]: SearchBtn,
  [VariantBtn.SearchBy]: SearchByBtn,
  [VariantBtn.SortBy]: SortByBtn,
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantBtn: VariantBtn;
  onClick?: () => void;
  active: boolean;
}

const Button = ({ active, variantBtn, onClick, children }: ButtonProps) => {
  const SelectedVariantBtn = variantsBtn[variantBtn];

  return (
    <>
      <SelectedVariantBtn active={active} onClick={onClick}>
        {children}
      </SelectedVariantBtn>
    </>
  );
};

export default memo(Button);
