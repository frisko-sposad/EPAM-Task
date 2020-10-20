import React from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';

const Header = ({ isSearchShown, openSearch }) => {
  return (
    <header>
      <section className="header__container">
        <SiteTitle />
        {isSearchShown ? (
          <SearchSection />
        ) : (
          <MovieInfo openSearch={openSearch} />
        )}
      </section>
      {isSearchShown ? (
        <SortResultsSection
          moviesFound="7 movies found"
          releaseDate="release date"
          sortBy="Sort by"
          rating="rating"
        />
      ) : (
        <SortResultsSection filmsBy="Films by " genre="Drama genre" />
      )}
    </header>
  );
};

export default Header;
