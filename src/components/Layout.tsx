import Head from 'next/head';
import React, { FC, memo, PropsWithChildren, useState } from 'react';
import GlobalStyle from './App.styled';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import Main from './Main/Main';
import LayoutContainer from './Layout.styled';

interface LayoutProps {
  isSearchPage?: boolean;
  genres?: string[];
  isPageNotFound?: boolean;
}

const Layout = ({ isSearchPage = true, isPageNotFound, genres, children }: PropsWithChildren<LayoutProps>) => {
  const [moviesCount, setMoviesCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Head>
          <title>NetflixRoulette</title>
        </Head>
        <div>
          <Header isSearchPage={isSearchPage}>{children}</Header>
          <SortResultsSection isSearchPage={isSearchPage} genres={genres} moviesCount={moviesCount} />
        </div>
        <Main
          isSearchPage={isSearchPage}
          setMoviesCount={setMoviesCount}
          isPageNotFound={isPageNotFound}
          genres={genres}
        />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default memo(Layout);
