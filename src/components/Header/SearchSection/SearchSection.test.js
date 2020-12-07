import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './SearchSection';

describe('Testing SearchSection.', () => {
  const handlerMock = jest.fn();
  const component = shallow(<SearchSection closeSearch={() => handlerMock()} />);

  it('Do we have input in the Search Section?', () => {
    const input = component.find('input');
    expect(input.length).toBe(1);
  });
  it('Do we have Search button in the SearchSection?', () => {
    const buttonSearch = component.find('.btn_search');
    expect(buttonSearch.length).toBe(1);
  });
  it('Do we have two Search-By buttons in the SearchSection?', () => {
    const buttonSearchBy = component.find('.btn_search-by');
    expect(buttonSearchBy.length).toBe(2);
  });
  it('Click on the button trigger onClick prop function', () => {
    component.find('.btn_search').simulate('click');
    expect(handlerMock).toBeCalledTimes(1);
  });
});
