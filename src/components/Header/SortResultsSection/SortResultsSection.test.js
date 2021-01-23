import React from 'react';
import { shallow } from 'enzyme';
import SortResultsSection from './SortResultsSection';

const filmsByProps = 'Films by ';
const genreProps = 'Drama genre';
const totalProps = '7 movies found';
const sortByProps = 'Sort by';
const releaseDateProps = 'release date';
const ratingProps = 'rating';

describe('Films by genre.', () => {
  it('Do we have filmsBy and genre in the SortResultsSection?', () => {
    const component = shallow(<SortResultsSection filmsBy={filmsByProps} genre={genreProps} />);
    const filmsByText = component.find('.filmsBy').find('strong').text();
    const genreText = component.find('.genre').text();
    expect(filmsByText).toBe(filmsByProps);
    expect(genreText).toBe(genreProps);
  });
});
describe('Films by sort.', () => {
  it('Do we have total, sortBy, releaseDate, rating in the SortResultsSection?', () => {
    const component = shallow(
      <SortResultsSection
        total={totalProps}
        releaseDate={releaseDateProps}
        sortBy={sortByProps}
        rating={ratingProps}
      />,
    );
    const totalText = component.find('.total').find('strong').text();
    const sortByText = component.find('.sortBy').find('strong').text();
    const releaseDateText = component.find('.releaseDate').text();
    const ratingText = component.find('.rating').text();
    expect(totalText).toBe(totalProps);
    expect(sortByText).toBe(sortByProps);
    expect(releaseDateText).toBe(releaseDateProps);
    expect(ratingText).toBe(ratingProps);
  });
});
