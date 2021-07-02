import React, { FC, memo } from 'react';
import { GetServerSideProps } from 'next';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';
import MovieInfo from '../../components/Header/MovieInfo/MovieInfo';

interface MovieInfoProps {
  movie: ConvertedMovie;
}

const MovieInfoPage: FC<MovieInfoProps> = ({ movie }) => {
  return (
    <Layout isSearchPage={false} genres={movie.genres}>
      <MovieInfo movie={movie} />
    </Layout>
  );
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
