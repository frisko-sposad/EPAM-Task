import Link from 'next/link';
import React, { FC } from 'react';
import { ReturnSearchBtn } from '../../Generic/Button/Button.styled';
import { SearchContainer } from '../MovieInfo/MovieInfo.styled';

interface SiteTitleProps {
  isSearchPage?: boolean;
}
const SiteTitle: FC<SiteTitleProps> = ({ isSearchPage }) => (
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
