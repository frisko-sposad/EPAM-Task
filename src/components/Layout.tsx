import Head from 'next/head';
import React, { FC, useState } from 'react';
import GlobalStyle from './App.styled';
import { ConvertedMovie } from './App.types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import Main from './Main/Main';

interface LayoutProps {
  isSearchPage: boolean;
  movies?: ConvertedMovie[];
  movie?: ConvertedMovie;
  isPageNotFound?: boolean;
  query?: string[];
}

const Layout: FC<LayoutProps> = ({ isSearchPage, isPageNotFound, movie }) => {
  const { title, overview, releaseDate, posterPath, genres, runtime } = movie ?? {};
  const [moviesCount, setMoviesCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NetflixRoulette</title>
      </Head>
      <Header
        isSearchPage={isSearchPage}
        title={title}
        overview={overview}
        releaseDate={releaseDate}
        posterPath={posterPath}
        genres={genres}
        runtime={runtime}
      />
      <SortResultsSection isSearchPage={isSearchPage} genres={genres} moviesCount={moviesCount} />
      <Main isSearchPage={isSearchPage} setMoviesCount={setMoviesCount} isPageNotFound={isPageNotFound} />
      <Footer />
    </>
  );
};

export default Layout;
