import React from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.Header}>
      <div><SearchSection /></div>
      {/* <div><MovieInfo /></div> */}
    </header>
  );
};

export default Header;
