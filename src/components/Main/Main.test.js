import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import movieBase from '../MovieBase';

describe('Render Main.', () => {
  it('The number of MovieItem components is equal to the number of elements in the movieBase', () => {
    const component = shallow(<Main movieBase={movieBase} />).find('MovieItem');
    expect(component.length).toBe(movieBase.length);
  });
});
