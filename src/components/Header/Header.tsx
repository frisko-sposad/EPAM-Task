import React from 'react';
import { connect } from 'react-redux';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';
import { AppState } from '../App.types';

interface HeaderProps {
  isSearchShown: boolean;
  searchQuery: string;
  moviesFound: number;
  searchByOption: string;
  sortBy: string;
}

const Header = ({ isSearchShown, searchQuery, moviesFound, searchByOption, sortBy }: HeaderProps) => {
  return (
    <header>
      <section className="header__container">
        <SiteTitle />
        {isSearchShown ? <MovieInfo /> : <SearchSection searchByOption={searchByOption} />}
      </section>
      <SortResultsSection isSearchShown={isSearchShown} moviesFound={moviesFound} sortBy={sortBy} genre={searchQuery} />
    </header>
  );
};

const mapStateToProps = ({ isSearchShown, moviesFound }: Pick<AppState, 'isSearchShown' | 'moviesFound'>) => ({
  isSearchShown,
  moviesFound,
});

export default connect(mapStateToProps, null)(Header);
