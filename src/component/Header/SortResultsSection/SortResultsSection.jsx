import React from 'react';
import style from './SortResultsSection.module.css';

const SortResultsSection = ({  
  firstBlock,
  secondBlock,
  sortBy,
  releaseDate,
  raiting,
}) => {
  return (
    <section className={style.resultSort__container}>
      <div className={style.resultCount}>
        <span>
          <strong>{firstBlock} </strong>
        </span>
        <span>{secondBlock}</span>
      </div>
      <div className={style.resultSort}>
        <span>
          <strong>{sortBy} </strong>
        </span>
        <span>
          <a href="#" className={style.sortItem}>
            {releaseDate}
          </a>
        </span>
        <span>
          <a href="#" className={`${style.sortItem} ${style.active}`}>
            {raiting}
          </a>
        </span>
      </div>
    </section>
  );
};

export default SortResultsSection;
