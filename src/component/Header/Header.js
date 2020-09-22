import React from 'react';
import Search from './Search/Search';
import MovieInfo from './MovieInfo/MovieInfo';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.Header}>
      <div><Search /></div>
      {/* <div><MovieInfo /></div> */}
    </header>
  );
};

export default Header;
