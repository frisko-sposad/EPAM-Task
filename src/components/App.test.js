import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './Header/SearchSection/SearchSection';
import MovieSection from './Header/MovieInfo/MovieInfo';

describe('Testing clicking the Search button to change the header rendering state.', () => {
  const handlerMock = jest.fn();
  const handleClick = jest.spyOn(React, 'useState');
  handleClick.mockImplementation((isSearchShown) => [isSearchShown, handlerMock]);
  const searchSection = shallow(<SearchSection closeSearch={() => handlerMock(false)} />);
  const movieSection = shallow(<MovieSection openSearch={() => handlerMock(true)} />);

  it('Сlicking a button in the searchSection component', () => {
    searchSection.find('.btn_search').simulate('click');
    expect(handlerMock).toBeCalledWith(false);
  });
  it('Сlicking a button in the movieSection component', () => {
    movieSection.find('.btn_search').simulate('click');
    expect(handlerMock).toBeCalledWith(true);
  });
});
