import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import movieBase from '../MovieBase';

describe('Render Main.', () => {
  it('The MAIN component with the test database of movies must be equal to the snapshot', () => {
    const component = shallow(<Main movieBase={movieBase} />);
    expect(component).toMatchSnapshot();
  });
});
