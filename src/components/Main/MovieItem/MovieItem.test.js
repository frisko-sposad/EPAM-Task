import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import MovieItem from './MovieItem';
import movieBase from '../../MovieBase';

describe('Render MovieItem.', () => {
  it('MovieItem', () => {
    const component = mount(
      <BrowserRouter>
        <MovieItem {...movieBase[0]} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
