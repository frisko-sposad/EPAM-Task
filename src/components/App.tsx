import React, { FC, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import { fetchMovies } from './App.actions';
import { ConvertedMovie, AppDispatch, AppState } from './App.types';

interface AppProps {
  movies: ConvertedMovie[];
  moviesFound: number;
  sortByOption: string;
  searchQuery: string;
  isSearchShown: boolean;
  searchByOption: string;
  searchMovies: () => void;
}

const App: FC<AppProps> = ({
  movies,
  moviesFound,
  sortByOption,
  searchQuery,
  isSearchShown,
  searchByOption,
  searchMovies,
}: AppProps) => {
  useEffect(() => {
    searchMovies();
  }, [searchMovies, sortByOption, searchQuery, searchByOption]);

  return (
    <>
      <Header
        isSearchShown={isSearchShown}
        searchByOption={searchByOption}
        sortBy={sortByOption}
        moviesFound={moviesFound}
        searchQuery={searchQuery}
      />
      <Main movies={movies} />
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      searchMovies: fetchMovies,
    },
    dispatch,
  );

const mapStateToProps = (state: AppState) => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
