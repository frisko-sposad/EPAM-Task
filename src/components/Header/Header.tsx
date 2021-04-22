import React, { FC } from 'react';
import SearchSection from './SearchSection/SearchSection';
import { Container, HeaderContainer } from './Header.styled';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import SiteTitle from './SiteTitle/SiteTitle';
import MovieInfo from './MovieInfo/MovieInfo';
import { ConvertedMovie } from '../App.types';

interface HeaderProps {
  isSearchPage: boolean;
  movie?: ConvertedMovie | null | undefined;
  moviesFound?: number;
}

const Header: FC<HeaderProps> = ({ isSearchPage, movie, moviesFound }) => {
  const { genres } = movie ?? {};
  return (
    <HeaderContainer>
      <Container>
        <SiteTitle isSearchPage={isSearchPage} />
      </Container>
      <Container>{isSearchPage ? <SearchSection /> : <MovieInfo movie={movie} />}</Container>
      <SortResultsSection isSearchPage={isSearchPage} genres={genres} moviesFound={moviesFound} />
    </HeaderContainer>
  );
};

export default Header;
