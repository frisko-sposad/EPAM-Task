import React, { FC } from 'react';
import SearchSection from './SearchSection/SearchSection';
import { Container, HeaderContainer } from './Header.styled';
import SiteTitle from './SiteTitle/SiteTitle';
import MovieInfo from './MovieInfo/MovieInfo';
import { ConvertedMovie } from '../App.types';

interface HeaderProps extends ConvertedMovie {
  isSearchPage: boolean;
  moviesFound?: number;
}

const Header: FC<HeaderProps> = ({ isSearchPage, title, overview, releaseDate, posterPath, genres, runtime }) => {
  return (
    <HeaderContainer>
      <Container>
        <SiteTitle isSearchPage={isSearchPage} />
      </Container>
      <Container>
        {isSearchPage ? (
          <SearchSection />
        ) : (
          <MovieInfo
            title={title}
            overview={overview}
            releaseDate={releaseDate}
            posterPath={posterPath}
            genres={genres}
            runtime={runtime}
          />
        )}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
