import React from 'react';
import './SortResultsSection.css';

const SortResultsSection = ({ filmsBy, genre, moviesFound, sortBy, releaseDate, rating }) => (
  <section className="result-sort__container">
    {(filmsBy || moviesFound) && (
      <div>
        <span>
          <strong>
            {filmsBy}
            {moviesFound}
          </strong>
        </span>
        {genre && <span>{genre}</span>}
      </div>
    )}
    {sortBy && (
      <div>
        <span>
          <strong>{sortBy}</strong>
        </span>
        <button type="button" className="btn_sort">
          {releaseDate}
        </button>
        <button type="button" className="btn_sort">
          {rating}
        </button>
      </div>
    )}
  </section>
);

export default SortResultsSection;
