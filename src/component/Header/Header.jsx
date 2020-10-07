import React from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import style from './Header.module.css';

const Header = (props) => {
  if (props.showSearch) {
    return (
      <header className={style.Header}>
        <div>
          <SearchSection />
        </div>
      </header>
    );
  } else {
    return (
      <header className={style.Header}>
        <div>
          <MovieInfo openSearch={props.openSearch} />
        </div>
      </header>
    );
  }
};

export default Header;
