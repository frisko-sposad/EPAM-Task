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
}: SortResultsSectionProps) => (
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
