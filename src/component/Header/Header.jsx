import React from 'react';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import style from './Header.module.css';

const Header = (props) => {
  if (props.showSearch) {
    return (
      <header>
        <section className={style.header__container}>
          <h1 className={style.h1}>NetflixRoulette</h1>
          <SearchSection />
        </section>
        <section className={style.resultSort__container}>
          <div className={style.resultCount}>
            <span>
              <strong>7 movies found</strong>
            </span>
          </div>
          <div className={style.resultSort}>
            <span>
              <strong>Sort by </strong>
            </span>
            <span>release date</span>
            <span><strong>raiting</strong></span>
          </div>
        </section>
      </header>
    );
  } else {
    return (
      <header>
        <section className={style.header__container}>
          <h1 className={style.h1}>NetflixRoulette</h1>
          <MovieInfo openSearch={props.openSearch} />
        </section>
        <section className={style.resultSort__container}>
          <div className={style.resultCount}>
            <span>
              <strong>Films by </strong>
            </span>
            <span>Drama genre</span>
          </div>
          <div className={style.resultSort}></div>
        </section>
      </header>
    );
  }
};

export default Header;
