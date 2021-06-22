import Head from 'next/head';
import React, { FC, memo, useState } from 'react';
import GlobalStyle from './App.styled';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import Main from './Main/Main';
import LayoutContainer from './Layout.styled';

interface LayoutProps {
  isSearchPage: boolean;
  genres?: string[];
  isPageNotFound?: boolean;
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ isSearchPage, isPageNotFound, genres, children }) => {
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
        <Main isSearchPage={isSearchPage} setMoviesCount={setMoviesCount} isPageNotFound={isPageNotFound} />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default memo(Layout);
