import React from 'react';
import { shallow } from 'enzyme';
import SortResultsSection from './SortResultsSection';

describe('Films by genre.', () => {
  it('State filmsBy', () => {
    const component = shallow(<SortResultsSection filmsBy="Films by " genre="Drama genre" />);
    expect(component).toMatchSnapshot();
  });
});

describe('Films by sort', () => {
  it('State moviesFound', () => {
    const component = shallow(
      <SortResultsSection moviesFound="7 movies found" releaseDate="release date" sortBy="Sort by" rating="rating" />,
    );
    expect(component).toMatchSnapshot();
  });
});
