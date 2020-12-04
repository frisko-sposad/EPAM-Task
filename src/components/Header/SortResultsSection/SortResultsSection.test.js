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
    const componentFilmsBy = component.find('.filmsBy').find('strong').text();
    const componentGenre = component.find('.genre').text();
    expect(componentFilmsBy).toBe(filmsBy);
    expect(componentGenre).toBe(genre);
  });
});
describe('Films by sort.', () => {
  it('Do we have moviesFound, sortBy, releaseDate, rating in the SortResultsSection?', () => {
    const component = shallow(
      <SortResultsSection moviesFound={moviesFound} releaseDate={releaseDate} sortBy={sortBy} rating={rating} />,
    );
    const componentMoviesFound = component.find('.moviesFound').find('strong').text();
    const componentSortBy = component.find('.sortBy').find('strong').text();
    const componentReleaseDate = component.find('.releaseDate').text();
    const componentRating = component.find('.rating').text();
    expect(componentMoviesFound).toBe(moviesFound);
    expect(componentSortBy).toBe(sortBy);
    expect(componentReleaseDate).toBe(releaseDate);
    expect(componentRating).toBe(rating);
  });
});
