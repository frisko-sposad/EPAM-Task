import React, { ButtonHTMLAttributes, memo } from 'react';
import { SearchBtn, SearchByBtn, SortByBtn } from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantBtn: string;
  onClick?: () => void;
  active: boolean;
}

const Button = ({ active, variantBtn, onClick, children }: ButtonProps) => {
  return (
    <>
      {variantBtn === 'search' && <SearchBtn onClick={onClick}>{children}</SearchBtn>}
      {variantBtn === 'searchBy' && (
        <SearchByBtn active={active} onClick={onClick}>
          {children}
        </SearchByBtn>
      )}

      {variantBtn === 'sortBy' && (
        <SortByBtn active={active} onClick={onClick}>
          {children}
        </SortByBtn>
      )}
    </>
  );
};

export default memo(Button);
