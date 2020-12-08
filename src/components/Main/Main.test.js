import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import movieBase from '../MovieBase';

describe('Render Main.', () => {
  it('The number of MovieItem components is equal to the number of elements in the movieBase', () => {
    const movieItemElements = shallow(<Main movieBase={movieBase} />).find('MovieItem');
    expect(movieItemElements.length).toBe(movieBase.length);
  });
});
