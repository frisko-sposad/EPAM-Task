import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../Generic/Button/Button';
import VariantBtn from '../../Generic/Button/Button.types';
import { SearchContainer } from '../MovieInfo/MovieInfo.styled';

interface SiteTitle {
  isSearchPage?: boolean;
}
const Test = styled.a``;
const SiteTitle: FC<SiteTitle> = ({ isSearchPage }) => (
  <SearchContainer>
    <Link href="/" passHref>
      <a href="/">
        <h1>NetflixRoulette</h1>
      </a>
    </Link>
    {!isSearchPage && (
      <Link href="/" passHref>
        <Test>SEARCH</Test>
      </Link>
    )}
  </SearchContainer>
);

export default SiteTitle;
