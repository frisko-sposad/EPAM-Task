import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from './MovieItem';
import movieBase from '../../MovieBase';

describe('Render MovieItem.', () => {
  it('MovieItem', () => {
    const component = shallow(
      <MovieItem
        image={movieBase[0].image}
        name={movieBase[0].name}
        year={movieBase[0].year}
        genre={movieBase[0].genre}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
