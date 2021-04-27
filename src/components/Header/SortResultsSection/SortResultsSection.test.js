import React from 'react';
import { mount } from 'enzyme';
import SortResultsSection from './SortResultsSection';
import movieBase from '../../MovieBase';

const { genres } = movieBase[0];
const testMoviesFound = 55;

const getNodeText = (element) => element.text();

describe('Tested Sort Result Section', () => {
  const SortResultsSectionWithSearchByGenre = mount(<SortResultsSection genres={genres} />);
  it('Show the genre of found movies', () => {
    const items = SortResultsSectionWithSearchByGenre.find('span').map(getNodeText);
    expect(items).toEqual(['Films by: ', 'fantasy genre']);
  });

  const SortResultsSectionWithSearchInfo = mount(<SortResultsSection isSearchPage moviesFound={testMoviesFound} />);
  it('Show the number of movies found, sorted by date and rating.', () => {
    const span = SortResultsSectionWithSearchInfo.find('span').map(getNodeText);
    const button = SortResultsSectionWithSearchInfo.find('button').map(getNodeText);
    expect(span).toEqual(['55 movies found', 'Sort by: ']);
    expect(button).toEqual(['release date', 'rating']);
  });
});
