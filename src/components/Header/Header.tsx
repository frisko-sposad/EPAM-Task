import React, { FC } from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';

interface HeaderProps {
  isSearchShown: boolean;
  searchQuery: string;
  moviesFound: number;
  searchByOption: string;
  sortBy: string;
}

const Header: FC<HeaderProps> = ({ isSearchShown, searchQuery, moviesFound, searchByOption, sortBy }: HeaderProps) => {
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

export default Header;
