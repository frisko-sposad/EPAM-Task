import React from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import style from './Header.module.css';

const Header = ({ showSearch, openSearch }) => {
  return (
    <header>
      <section className={style.header__container}>
        <SiteTitle />
        {showSearch ? <SearchSection /> : <MovieInfo openSearch={openSearch} />}
      </section>
      {showSearch ? (
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
