import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './SearchSection';

describe('Testing SearchSection.', () => {
  const wrapper = shallow(<SearchSection />);
  it('Do we have input in the Search Section?', () => {
    const input = wrapper.find('input');
    expect(input.length).toBe(1);
  });
  it('Do we have Search button in the SearchSection?', () => {
    const input = wrapper.find('.btn_search');
    expect(input.length).toBe(1);
  });
  it('Do we have two Search-By buttons in the SearchSection?', () => {
    const input = wrapper.find('.btn_search-by');
    expect(input.length).toBe(2);
  });
});
