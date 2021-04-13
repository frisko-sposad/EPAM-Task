import React, { FC } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { HeaderContainer } from '../../components/Header/Header.styled';
import GlobalStyle from '../../components/App.styled';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';

interface PagesFilmProps {
  movie?: ConvertedMovie | null;
  movies: ConvertedMovie[];
}

const MovieInfoPage: FC<PagesFilmProps> = ({ movie, movies }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NetflixRoulette</title>
      </Head>
      <HeaderContainer>
        <Header isSearchPage={false} movie={movie} />
      </HeaderContainer>
      <Main movies={movies} />
      <Footer />
    </>
  );
};

export default MovieInfoPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseMovieById = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${params.id}`).then((res) =>
    res.json(),
  );
  const movie = convertMovieToCamelCase(responseMovieById);

  const responseMovies = await fetch(
    `https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=${
      movie.genres[0] ?? ''
    }&searchBy=genres`,
  ).then((res) => res.json());

  const { data } = responseMovies;
  const movies = data.map(convertMovieToCamelCase);

  return {
    props: { movie, movies },
  };
};
