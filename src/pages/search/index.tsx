import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import convertMovieToCamelCase from '../../components/App.helpers';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface PageSearchProps {
  movies: ConvertedMovie[];
  moviesFound?: number;
}

const SearchPage: FC<PageSearchProps> = ({ movies, moviesFound }) => {
  return <Layout isSearchPage moviesFound={moviesFound} movies={movies} />;
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { sortBy, search, searchBy } = query;

  const response = await fetch(
    `https://reactjs-cdp.herokuapp.com/movies?sortBy=${
      sortBy !== 'null' ? sortBy : 'release_date'
    }&sortOrder=desc&search=${search ?? ''}&searchBy=${searchBy || 'title'}`,
  ).then((res) => res.json());
  const { data, total } = response;
  const movies = data.map(convertMovieToCamelCase);
  const moviesFound = total;
  return {
    props: { movies, moviesFound },
  };
};
