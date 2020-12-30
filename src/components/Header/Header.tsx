import React from 'react';
import { connect } from 'react-redux';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';

interface HeaderProps {
  isSearchShown: boolean;
  searchQuery: string;
  total: number;
}

const Header = ({ isSearchShown, searchQuery, total }: HeaderProps) => {
  console.log(total);
  return (
    <header>
      <section className="header__container">
        <SiteTitle />
        {isSearchShown ? <SearchSection /> : <MovieInfo />}
      </section>
      {isSearchShown ? (
        <SortResultsSection
          moviesFound={`${total} movies found`}
          releaseDate="release date"
          sortBy="Sort by"
          rating="rating"
        />
      ) : (
        <SortResultsSection filmsBy="Films by " genre={searchQuery} />
      )}
    </header>
  );
};

const mapStateToProps = ({ isSearchShown, searchQuery, total }) => ({
  isSearchShown,
  searchQuery,
  total,
});

export default connect(mapStateToProps, null)(Header);
