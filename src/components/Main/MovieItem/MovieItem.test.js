import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from './MovieItem';

describe('Render MovieItem.', () => {
  it('MovieItem', () => {
    const component = shallow(<MovieItem />);
    expect(component).toMatchSnapshot();
  });
});