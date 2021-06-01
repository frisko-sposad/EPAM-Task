import React, { FC } from 'react';
import { ConvertedMovie } from '../../components/App.types';
import Layout from '../../components/Layout';

interface PageSearchProps {
  movies: ConvertedMovie[];
  moviesFound?: number;
}

const SearchPage: FC<PageSearchProps> = () => {
  return <Layout isSearchPage />;
};

export default SearchPage;
