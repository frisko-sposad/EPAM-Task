import React, { FC } from 'react';
import SearchSection from './SearchSection/SearchSection';
import { Container, HeaderContainer } from './Header.styled';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import SiteTitle from './SiteTitle/SiteTitle';
import MovieInfo from './MovieInfo/MovieInfo';

interface HeaderProps {
  isSearchPage: boolean;
}

const Header: FC<HeaderProps> = ({ isSearchPage }) => {
  return (
    <>
      <HeaderContainer>
        <Container>
          <SiteTitle />
        </Container>
        {isSearchPage ? (
          <>
            <Container>
              <SearchSection />
            </Container>
            <SortResultsSection isSearchShown={false} />
          </>
        ) : (
          <>
            <Container>
              <MovieInfo />
            </Container>
            <SortResultsSection isSearchShown />
          </>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
