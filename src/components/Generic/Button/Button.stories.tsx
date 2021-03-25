import React, { useState } from 'react';
import Button from './Button';
import VariantBtn from './Button.types';

const createButton = (variant: VariantBtn, children: string): JSX.Element => {
  return (
    <Button variant={variant} active>
      {children}
    </Button>
  );
};

const GroupButton = (variant: VariantBtn, children: string[]): JSX.Element => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const invertButtonActivity = () => setIsActiveBtn(!isActiveBtn);
  return (
    <>
      <Button variant={variant} active={isActiveBtn} onClick={invertButtonActivity}>
        {children[0]}
      </Button>
      <Button variant={variant} active={!isActiveBtn} onClick={invertButtonActivity}>
        {children[1]}
      </Button>
    </>
  );
};

export const SearchButton = (): JSX.Element => createButton(VariantBtn.Search, 'SEARCH');

export const SearchByButton = (): JSX.Element => GroupButton(VariantBtn.SearchBy, ['TITLE', 'GENRE']);

export const SortByButton = (): JSX.Element => GroupButton(VariantBtn.SortBy, ['release date', 'rating']);

export default {
  title: 'Button',
  component: Button,
};
