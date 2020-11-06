import React, { memo } from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';

<<<<<<< HEAD
<<<<<<< HEAD
interface HeaderProps {
  isSearchShown: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}
=======
interface HeaderProps {isSearchShown:boolean, openSearch:() => void, closeSearch:() => void}
>>>>>>> 7b7863b... fixed bugs,
=======
interface HeaderProps { isSearchShown: boolean, openSearch: () => void, closeSearch: () => void }
>>>>>>> 31bd3fc... lint jsx -> tsx,

const Header = ({ isSearchShown, openSearch, closeSearch }: HeaderProps) => (
  <header>
    <section className="header__container">
      <SiteTitle />
<<<<<<< HEAD
<<<<<<< HEAD
      {isSearchShown ? <SearchSection closeSearch={closeSearch} /> : <MovieInfo openSearch={openSearch} />}
=======
      {isSearchShown ? <SearchSection closeSearch={closeSearch}/> : <MovieInfo openSearch={openSearch} />}
>>>>>>> 7b7863b... fixed bugs,
=======
      {isSearchShown ? <SearchSection closeSearch={closeSearch} /> : <MovieInfo openSearch={openSearch} />}
>>>>>>> 31bd3fc... lint jsx -> tsx,
    </section>
    {isSearchShown ? (
      <SortResultsSection moviesFound="7 movies found" releaseDate="release date" sortBy="Sort by" rating="rating" />
    ) : (
        <SortResultsSection filmsBy="Films by " genre="Drama genre" />
      )}
  </header>
);

<<<<<<< HEAD
<<<<<<< HEAD
export default memo(Header);
=======
export default React.memo(Header);
>>>>>>> 7b7863b... fixed bugs,
=======
export default memo(Header);
>>>>>>> 31bd3fc... lint jsx -> tsx,
