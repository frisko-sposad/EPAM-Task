import React, { FC } from 'react';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface SearchPageProps {
  movies: ConvertedMovie[];
  moviesFound?: number;
}

const SearchPage: FC<SearchPageProps> = () => {
  return <Layout isSearchPage />;
};

export default SearchPage;
