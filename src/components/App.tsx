import React, { FC, useEffect } from 'react';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import { searchMovies } from './App.actions';
import { ConvertedMovie, SearchMovies } from './App.types';

interface AppPropsType {
  movies: ConvertedMovie[];
  total: number;
  sortBy: string;
  searchQuery: string;
  isSearchShown: boolean;
  searchMovies: SearchMovies;
  searchByOption: string;
}

const App: FC = ({ movies, total, searchByOption, sortBy, searchQuery, isSearchShown, searchMovies }: AppPropsType) => {
  useEffect(() => {
    searchMovies('');
  }, [searchMovies]);

  return (
    <>
      <Header
        isSearchShown={isSearchShown}
        searchByOption={searchByOption}
        sortBy={sortBy}
        total={total}
        searchQuery={searchQuery}
        searchMovies={searchMovies}
      />
      <Main movies={movies} />
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      searchMovies,
    },
    dispatch,
  );

const mapStateToProps = ({ movies, total, searchByOption, sortBy, searchQuery, isSearchShown }: AppPropsType) => ({
  movies,
  total,
  searchByOption,
  sortBy,
  searchQuery,
  isSearchShown,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
