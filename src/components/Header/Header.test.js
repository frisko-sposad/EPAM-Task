import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Testing Header openSearch.', () => {
  it('State isSearchShown = true', () => {
    const component = shallow(<Header isSearchShown />);
    expect(component).toMatchSnapshot();
  });
});

describe('Testing Header closeSearch.', () => {
  it('State isSearchShown = false', () => {
    const component = shallow(<Header isSearchShown={false} />);
    expect(component).toMatchSnapshot();
  });
});
