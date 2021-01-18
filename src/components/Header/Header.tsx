import React from 'react';
import { connect } from 'react-redux';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';
import { SearchMovies, SetSearchByOption, SetSearchQuery } from '../App.types';

interface HeaderProps {
  isSearchShown: boolean;
  searchQuery: string;
  total: number;
  searchByOption: string;
  sortBy: string;
  searchMovies: SearchMovies;
  setSearchByOption: SetSearchByOption;
  setSearchQuery: SetSearchQuery;
}

const Header = ({
  isSearchShown,
  searchQuery,
  total,
  searchByOption,
  sortBy,
  searchMovies,
  setSearchByOption,
  setSearchQuery,
}: HeaderProps) => {
  return (
    <header>
      <section className="header__container">
        <SiteTitle />
        {isSearchShown ? (
          <SearchSection
            searchMovies={searchMovies}
            searchByOption={searchByOption}
            setSearchByOption={setSearchByOption}
            setSearchQuery={setSearchQuery}
          />
        ) : (
          <MovieInfo />
        )}
      </section>
      {isSearchShown ? (
        <SortResultsSection
          moviesFound={`${total} movies found`}
          sortBy={sortBy}
          releaseDate="release date"
          sortByTitle="Sort by"
          rating="rating"
        />
      ) : (
        <SortResultsSection filmsBy="Films by " genre={searchQuery} />
      )}
    </header>
  );
};

const mapStateToProps = ({ isSearchShown, total }) => ({
  isSearchShown,
  total,
});

export default connect(mapStateToProps, null)(Header);
