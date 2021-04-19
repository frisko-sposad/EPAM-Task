import React from 'react';
import { mount } from 'enzyme';
import SearchSection from './SearchSection';

describe('Testing SearchSection.', () => {
  const component = mount(<SearchSection />);

  it('Do we have input in the Search Section?', () => {
    const input = component.find('input');
    expect(input.length).toBe(1);
  });
  it('Do we have buttons in the SearchSection?', () => {
    const button = component.find('button').map((node) => node.text());
    expect(button).toEqual(['TITLE', 'GENRE', '0', 'SEARCH']);
  });
  it('Click on the button trigger onClick prop function', () => {
    const buttonSearch = component
      .find('button')
      .filterWhere((node) => node.text() === 'SEARCH')
      .simulate('click');
    expect(buttonSearch.length).toEqual(1);
  });
});
