import React from 'react';
import { shallow } from 'enzyme';
import SortResultsSection from './SortResultsSection';

const filmsBy = 'Films by ';
const genre = 'Drama genre';
const moviesFound = '7 movies found';
const sortBy = 'Sort by';
const releaseDate = 'release date';
const rating = 'rating';

describe('Films by genre.', () => {
  it('Do we have filmsBy and genre in the SortResultsSection?', () => {
    const component = shallow(<SortResultsSection filmsBy={filmsBy} genre={genre} />);
    const componentFilmsBy = component.find('.filmsBy');
    const componentGenre = component.find('.genre');
    expect(componentFilmsBy.length).toBe(1);
    expect(componentGenre.length).toBe(1);
  });
});
describe('Films by sort.', () => {
  it('Do we have moviesFound, sortBy, releaseDate, rating in the SortResultsSection?', () => {
    const component = shallow(
      <SortResultsSection moviesFound={moviesFound} releaseDate={releaseDate} sortBy={sortBy} rating={rating} />,
    );
    const componentMoviesFound = component.find('.moviesFound');
    const componentSortBy = component.find('.sortBy');
    const componentReleaseDate = component.find('.releaseDate');
    const componentRating = component.find('.rating');
    expect(componentMoviesFound.length).toBe(1);
    expect(componentSortBy.length).toBe(1);
    expect(componentReleaseDate.length).toBe(1);
    expect(componentRating.length).toBe(1);
  });
});
