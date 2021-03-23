import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router';
import Main from './Main';
import movieBase from '../MovieBase';
import rootReducer from '../App.reducers';

const initialState = {
  movies: movieBase,
};

const store = createStore(rootReducer, initialState);

const Wrapper = ({ children, url }) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={[url]}>{children}</MemoryRouter>
  </Provider>
);

describe('Render Main.', () => {
  const PageNotFound = mount(
    <Wrapper url="*">
      <Main />
    </Wrapper>,
  );
  it('If the error is in the url, we render page NoFilmsFound', () => {
    const items = PageNotFound.find('PageNotFound');
    expect(items.length).toBe(1);
  });

  const NoFilmsFound = mount(
    <Wrapper url="/">
      <Main />
    </Wrapper>,
  );
  it('If no movies are found, we render page NoFilmsFound', () => {
    const items = NoFilmsFound.find('NoFilmsFound');
    expect(items.length).toBe(1);
  });

  const SuccessfulSearch = mount(
    <Wrapper url="/search">
      <Main />
    </Wrapper>,
  );
  it('With a successful search, we render 10 MovieItem components', () => {
    const items = SuccessfulSearch.find('MovieItem');
    expect(items.length).toBe(10);
  });
});
