import React, { useState } from 'react';
import Button from './Button';
import { VariantBtn } from '../../App.types';

export default {
  title: 'Button',
  component: Button,
};

export const search = (): JSX.Element => (
  <Button variantBtn={VariantBtn.Search} active>
    SEARCH
  </Button>
);

export const SearchBy = (): JSX.Element => {
  const [isActive, setIsActive] = useState(true);
  const setActive = () => setIsActive(!isActive);
  return (
    <>
      <Button variantBtn={VariantBtn.SearchBy} active={isActive} onClick={setActive}>
        TITLE
      </Button>
      <Button variantBtn={VariantBtn.SearchBy} active={!isActive} onClick={setActive}>
        GENRE
      </Button>
    </>
  );
};

export const SortBy = (): JSX.Element => {
  const [isActive, setIsActive] = useState(true);
  const setActive = () => setIsActive(!isActive);
  return (
    <>
      <Button variantBtn={VariantBtn.SortBy} active={isActive} onClick={setActive}>
        release date
      </Button>
      <Button variantBtn={VariantBtn.SortBy} active={!isActive} onClick={setActive}>
        rating
      </Button>
    </>
  );
};
