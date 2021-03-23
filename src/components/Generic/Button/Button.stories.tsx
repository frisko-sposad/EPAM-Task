import React, { useState } from 'react';
import Button from './Button';
import VariantBtn from './Button.types';

export default {
  title: 'Button',
  component: Button,
};

export const Search = (): JSX.Element => (
  <Button variantButton={VariantBtn.Search} active>
    SEARCH
  </Button>
);

export const SearchBy = (): JSX.Element => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const invertButtonActivity = () => setIsActiveBtn(!isActiveBtn);
  return (
    <>
      <Button variantButton={VariantBtn.SearchBy} active={isActiveBtn} onClick={invertButtonActivity}>
        TITLE
      </Button>
      <Button variantButton={VariantBtn.SearchBy} active={!isActiveBtn} onClick={invertButtonActivity}>
        GENRE
      </Button>
    </>
  );
};

export const SortBy = (): JSX.Element => {
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const invertButtonActivity = () => setIsActiveBtn(!isActiveBtn);
  return (
    <>
      <Button variantButton={VariantBtn.SortBy} active={isActiveBtn} onClick={invertButtonActivity}>
        release date
      </Button>
      <Button variantButton={VariantBtn.SortBy} active={!isActiveBtn} onClick={invertButtonActivity}>
        rating
      </Button>
    </>
  );
};
