import Link from 'next/link';
import React, { FC } from 'react';
import { ReturnSearchBtn } from '../../Generic/Button/Button.styled';
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
      <Link href="/" passHref>
        <ReturnSearchBtn>SEARCH</ReturnSearchBtn>
      </Link>
    )}
  </SearchContainer>
);

export default SiteTitle;
