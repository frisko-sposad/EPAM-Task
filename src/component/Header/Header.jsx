import React from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import TitleH1 from './TitleH1/TitleH1';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import style from './Header.module.css';

const Header = ({ showSearch, openSearch }) => {
  return (
    <header>
      <section className={style.header__container}>
        <TitleH1 />
        {showSearch ? <SearchSection /> : <MovieInfo openSearch={openSearch} />}
      </section>
      {showSearch ? (
        <SortResultsSection
          firstBlock="7 movies found"
          releaseDate="release date"
          sortBy="Sort by"
          raiting="raiting"
        />
      ) : (
        <SortResultsSection firstBlock="Films by " secondBlock="Drama genre" />
      )}
    </header>
  );
};

export default Header;
