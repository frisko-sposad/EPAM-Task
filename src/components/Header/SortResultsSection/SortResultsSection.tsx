import React, { FC } from 'react';
import './SortResultsSection.css';

interface SortResultsSectionProps {
  filmsBy?: string;
  genre?: string;
  moviesFound?: string;
  sortBy?: string;
  releaseDate?: string;
  rating?: string;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({
  filmsBy,
  genre,
  moviesFound,
  sortBy,
  releaseDate,
  rating,
}) => (
  <section className="result-sort__container">
    {(filmsBy || moviesFound) && (
      <div>
        <span className="filmsBy">
          <strong>{filmsBy}</strong>
        </span>
        <span>
          <strong className="moviesFound">{moviesFound}</strong>
        </span>
        {genre && <span className="genre">{genre}</span>}
      </div>
    )}
    {sortBy && (
      <div>
        <span className="sortBy">
          <strong>{sortBy}</strong>
        </span>
        <button type="button" className="btn_sort releaseDate">
          {releaseDate}
        </button>
        <button type="button" className="btn_sort rating">
          {rating}
        </button>
      </div>
    )}
  </section>
);

export default SortResultsSection;
