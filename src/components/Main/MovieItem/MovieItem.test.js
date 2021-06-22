import React from 'react';
import { mount } from 'enzyme';
import MovieItem from './MovieItem';
import movieBase from '../../MovieBase';

describe('Render MovieItem.', () => {
  it('MovieItem', () => {
    const component = mount(<MovieItem movie={movieBase[0]} />);
    expect(component).toMatchSnapshot();
  });
});
