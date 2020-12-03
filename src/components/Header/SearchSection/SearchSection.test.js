import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './SearchSection';

describe('Testing SearchSection.', () => {
  it('Do we have input in the Search Section?', () => {
    const wrapper = shallow(<SearchSection />);
    const imput = wrapper.find('input');
    expect(imput.length).toBe(1);
  });
  it('Do we have Search button in the SearchSection?', () => {
    const wrapper = shallow(<SearchSection />);
    const imput = wrapper.find('.btn_search');
    expect(imput.length).toBe(1);
  });
  it('Do we have two Search-By buttons in the SearchSection?', () => {
    const wrapper = shallow(<SearchSection />);
    const imput = wrapper.find('.btn_search-by');
    expect(imput.length).toBe(2);
  });
});
