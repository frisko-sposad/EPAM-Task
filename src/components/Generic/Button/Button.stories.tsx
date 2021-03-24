import React, { ButtonHTMLAttributes, useState } from 'react';
import Button from './Button';
import VariantBtn from './Button.types';

export interface createButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantButton: VariantBtn;
  onClick?: () => void;
  active: boolean;
  children: string;
}

const createButton = (
  variantButton: VariantBtn,
  active: boolean,
  children: string,
  onClick?: () => void,
): JSX.Element => {
  return (
    <Button variantButton={variantButton} active={active} onClick={onClick}>
      {children}
    </Button>
  );
};

export default {
  title: 'Button',
  component: Button,
};

export const SearchButton = (): JSX.Element => createButton(VariantBtn.Search, true, 'SEARCH');

export const SearchByButton = (): JSX.Element => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const invertButtonActivity = () => setIsActiveBtn(!isActiveBtn);
  return (
    <>
      {createButton(VariantBtn.SearchBy, isActiveBtn, 'TITLE', invertButtonActivity)}
      {createButton(VariantBtn.SearchBy, !isActiveBtn, 'GENRE', invertButtonActivity)}
    </>
  );
};

export const SortByButton = (): JSX.Element => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const invertButtonActivity = () => setIsActiveBtn(!isActiveBtn);
  return (
    <>
      {createButton(VariantBtn.SortBy, isActiveBtn, 'release date', invertButtonActivity)}
      {createButton(VariantBtn.SortBy, !isActiveBtn, 'rating', invertButtonActivity)}
    </>
  );
};
