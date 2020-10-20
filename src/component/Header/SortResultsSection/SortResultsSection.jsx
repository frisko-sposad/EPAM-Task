import React from 'react';
import './SortResultsSection.css';

const SortResultsSection = ({
  filmsBy,
  genre,
  moviesFound,
  sortBy,
  releaseDate,
  rating,
}) => {
  return (
    <section className="result-sort__container">
      {filmsBy || moviesFound ? (
        <div>
          <span>
            <strong>
              {filmsBy && filmsBy}
              {moviesFound && moviesFound}
            </strong>
          </span>
          {genre && <span>{genre}</span>}
        </div>
      ) : null}
      {sortBy && (
        <div>
          <span>
            <strong>{sortBy}</strong>
          </span>
          <button className="btn_sort">{releaseDate}</button>
          <button className="btn_sort">{rating}</button>
        </div>
      )}
    </section>
  );
};

export default SortResultsSection;
