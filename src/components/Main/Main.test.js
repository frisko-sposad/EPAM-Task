import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import movieBase from '../MovieBase';

describe('Render Main.', () => {
  it('Main', () => {
    const component = shallow(<Main movieBase={movieBase} />);
    expect(component).toMatchSnapshot();
  });
});
