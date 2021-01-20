import React, { FC, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import { fetchMovies } from './App.actions';
import { Action, ConvertedMovie, StateType } from './App.types';

interface AppPropsType {
  movies: ConvertedMovie[];
  total: number;
  sortBy: string;
  searchQuery: string;
  isSearchShown: boolean;
  searchByOption: string;
  searchMovies: () => void;
}

const App: FC<AppPropsType> = ({
  movies,
  total,
  sortBy,
  searchQuery,
  isSearchShown,
  searchByOption,
  searchMovies,
}: AppPropsType) => {
  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  return (
    <>
      <Header
        isSearchShown={isSearchShown}
        searchByOption={searchByOption}
        sortBy={sortBy}
        total={total}
        searchQuery={searchQuery}
      />
      <Main movies={movies} />
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, Action>) =>
  bindActionCreators(
    {
      searchMovies: fetchMovies,
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
