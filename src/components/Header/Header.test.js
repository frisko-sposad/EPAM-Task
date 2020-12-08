import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Testing the openSearch block in Header.', () => {
  it('If State isSearchShown = true, we check the openSearch snapshot', () => {
    const component = shallow(<Header isSearchShown />);
    expect(component).toMatchSnapshot();
  });
});

describe('Testing the closeSearch block in Header.', () => {
  it('If State isSearchShown = false, we check the closeSearch snapshot', () => {
    const component = shallow(<Header isSearchShown={false} />);
    expect(component).toMatchSnapshot();
  });
});
