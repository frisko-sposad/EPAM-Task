import React, { FC, memo } from 'react';
import { GetServerSideProps } from 'next';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface MovieInfoProps {
  movie: ConvertedMovie;
}

const MovieInfoPage: FC<MovieInfoProps> = ({ movie }) => {
  return <Layout isSearchPage={false} movie={movie} />;
};

export default memo(MovieInfoPage);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const responseMovieById = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${params?.id}`).then((res) =>
    res.json(),
  );
  const movie = Object.keys(responseMovieById).length !== 0 ? convertMovieToCamelCase(responseMovieById) : null;

  return {
    props: { movie },
  };
};
