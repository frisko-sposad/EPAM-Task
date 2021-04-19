import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Testing the openSearch block in Header.', () => {
  it('If State isSearchPage = true, we check the openSearch snapshot', () => {
    const component = shallow(<Header isSearchPage />);
    expect(component).toMatchSnapshot();
  });
});

describe('Testing the closeSearch block in Header.', () => {
  it('If State isSearchPage = false, we check the closeSearch snapshot', () => {
    const component = shallow(<Header isSearchPage={false} />);
    expect(component).toMatchSnapshot();
  });
});
