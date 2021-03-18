import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MovieItem from './MovieItem';
import movieBase from '../../MovieBase';
import rootReducer from '../../App.reducers';

const initialState = {
  movie: movieBase[0],
};

const store = createStore(rootReducer, initialState);

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

describe('Render MovieItem.', () => {
  it('MovieItem', () => {
    const component = mount(
      <Wrapper>
        <MovieItem
          title={movieBase[0].title}
          posterPath={movieBase[0].posterPath}
          releaseDate={movieBase[0].releaseDate}
          genres={movieBase[0].genres}
        />
      </Wrapper>,
    );
    expect(component).toMatchSnapshot();
  });
});
