import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './Header/SearchSection/SearchSection';
import MovieSection from './Header/MovieInfo/MovieInfo';

describe('App test btn', () => {
  const handlerMock = jest.fn();
  const handleClick = jest.spyOn(React, 'useState');
  handleClick.mockImplementation((isSearchShown) => [isSearchShown, handlerMock]);
  const searchSection = shallow(<SearchSection closeSearch={() => handlerMock(false)} />);
  const movieSection = shallow(<MovieSection openSearch={() => handlerMock(true)} />);

  it('App btn', () => {
    searchSection.find('.btn_search').simulate('click');
    expect(handlerMock).toBeCalledWith(false);
  });
  it('App btn2', () => {
    movieSection.find('.btn_search').simulate('click');
    expect(handlerMock).toBeCalledWith(true);
  });
});
