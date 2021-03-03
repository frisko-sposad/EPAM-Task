import React, { useState } from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const search = (): JSX.Element => (
  <Button variantBtn="search" active>
    SEARCH
  </Button>
);

export const SearchBy = (): JSX.Element => {
  const [isActive, setIsActive] = useState(true);
  const setActive = () => setIsActive(!isActive);
  return (
    <>
      <Button variantBtn="searchBy" active={isActive} onClick={setActive}>
        TITLE
      </Button>
      <Button variantBtn="searchBy" active={!isActive} onClick={setActive}>
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
      <Button variantBtn="sortBy" active={isActive} onClick={setActive}>
        release date
      </Button>
      <Button variantBtn="sortBy" active={!isActive} onClick={setActive}>
        rating
      </Button>
    </>
  );
};
