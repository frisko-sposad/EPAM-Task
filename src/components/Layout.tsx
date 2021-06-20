import Head from 'next/head';
import React, { FC, memo, useState } from 'react';
import GlobalStyle from './App.styled';
import { ConvertedMovie } from './App.types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import Main from './Main/Main';
import LayoutContainer from './Layout.styled';

interface LayoutProps {
  isSearchPage: boolean;
  movie?: ConvertedMovie;
  isPageNotFound?: boolean;
}

const Layout: FC<LayoutProps> = ({ isSearchPage, isPageNotFound, movie }) => {
  const { title, overview, releaseDate, posterPath, genres, runtime } = movie ?? {
    title: '',
    overview: '',
    releaseDate: '',
    posterPath: '',
    genres: [],
    runtime: null,
  };
  const [moviesCount, setMoviesCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Head>
          <title>NetflixRoulette</title>
        </Head>
        <div>
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
        </div>
        <Main isSearchPage={isSearchPage} setMoviesCount={setMoviesCount} isPageNotFound={isPageNotFound} />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default memo(Layout);
