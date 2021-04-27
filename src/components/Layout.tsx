import Head from 'next/head';
import React, { FC } from 'react';
import GlobalStyle from './App.styled';
import { ConvertedMovie } from './App.types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

interface LayoutProps {
  isSearchPage: boolean;
  movies?: ConvertedMovie[];
  movie?: ConvertedMovie | null;
  moviesFound?: number;
  isPageNotFound?: boolean;
}

const Layout: FC<LayoutProps> = ({ isSearchPage, movie, movies, moviesFound, isPageNotFound }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NetflixRoulette</title>
      </Head>
      <Header isSearchPage={isSearchPage} movie={movie} moviesFound={moviesFound} />
      <Main movies={movies} isPageNotFound={isPageNotFound} />
      <Footer />
    </>
  );
};

export default Layout;
