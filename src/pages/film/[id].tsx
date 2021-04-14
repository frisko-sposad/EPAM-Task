import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface PagesFilmProps {
  movie?: ConvertedMovie | null;
  movies: ConvertedMovie[];
}

const MovieInfoPage: FC<PagesFilmProps> = ({ movie, movies }) => {
  return (
    <Layout>
      <Header isSearchPage={false} movie={movie} />
      <Main movies={movies} />
    </Layout>
  );
};

export default MovieInfoPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseMovieById = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${params && params.id}`).then((res) =>
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
