import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface PagesFilmProps {
  movie: ConvertedMovie | null | undefined;
  movies: ConvertedMovie[];
}

const MovieInfoPage: FC<PagesFilmProps> = ({ movie, movies }) => {
  return <Layout isSearchPage={false} movie={movie} movies={movies} />;
};

export default MovieInfoPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseMovieById = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${params?.id}`).then((res) =>
    res.json(),
  );
  const movie = Object.keys(responseMovieById).length !== 0 ? convertMovieToCamelCase(responseMovieById) : null;

  const responseMovies =
    movie &&
    (await fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=${
        movie?.genres[0] ?? ''
      }&searchBy=genres`,
    ).then((res) => res.json()));

  const { data } = responseMovies;
  const movies = data.map(convertMovieToCamelCase);

  return {
    props: { movie, movies },
  };
};
