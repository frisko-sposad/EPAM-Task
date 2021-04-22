import Link from 'next/link';
import React, { FC } from 'react';
import Button from '../../Generic/Button/Button';
import VariantBtn from '../../Generic/Button/Button.types';
import { SearchContainer } from '../MovieInfo/MovieInfo.styled';

interface SiteTitle {
  isSearchPage?: boolean;
}

const SiteTitle: FC<SiteTitle> = ({ isSearchPage }) => (
  <SearchContainer>
    <Link href="/" passHref>
      <a href="/">
        <h1>NetflixRoulette</h1>
      </a>
    </Link>
    {!isSearchPage && (
      <Link href="/">
        <Button active={false} variant={VariantBtn.Search}>
          SEARCH
        </Button>
      </Link>
    )}
  </SearchContainer>
);

export default SiteTitle;
