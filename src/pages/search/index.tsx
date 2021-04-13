import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import convertMovieToCamelCase from '../../components/App.helpers';
import { MovieItemType } from '../../components/App.types';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout';
import Main from '../../components/Main/Main';

interface PageSearchProps {
  movies?: MovieItemType[];
  moviesFound?: number;
}

const SearchPage: FC<PageSearchProps> = ({ movies, moviesFound }) => {
  return (
    <Layout>
      <Header isSearchPage moviesFound={moviesFound} />
      <Main movies={movies} />
    </Layout>
  );
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
