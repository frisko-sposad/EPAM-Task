import React, { memo } from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';

interface HeaderProps { isSearchShown: boolean, openSearch: () => void, closeSearch: () => void }

const Header = ({ isSearchShown, openSearch, closeSearch }: HeaderProps) => (
  <header>
    <section className="header__container">
      <SiteTitle />
      {isSearchShown ? <SearchSection closeSearch={closeSearch} /> : <MovieInfo openSearch={openSearch} />}
    </section>
    {isSearchShown ? (
      <SortResultsSection moviesFound="7 movies found" releaseDate="release date" sortBy="Sort by" rating="rating" />
    ) : (
        <SortResultsSection filmsBy="Films by " genre="Drama genre" />
      )}
  </header>
);

export default memo(Header);
