import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface PagesFilmProps {
  movie: ConvertedMovie;
  movies: ConvertedMovie[];
}

const MovieInfoPage: FC<PagesFilmProps> = ({ movie }) => {
  return <Layout isSearchPage={false} movie={movie} />;
};

export default MovieInfoPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseMovieById = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${params?.id}`).then((res) =>
    res.json(),
  );
  const movie = Object.keys(responseMovieById).length !== 0 ? convertMovieToCamelCase(responseMovieById) : null;

  return {
    props: { movie },
  };
};
