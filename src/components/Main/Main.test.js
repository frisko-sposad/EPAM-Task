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

const WrapperPageNotFound = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['*']}>{children}</MemoryRouter>
  </Provider>
);

const WrapperNoFilmsFound = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  </Provider>
);

const WrapperSuccessfulSearch = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/search']}>{children}</MemoryRouter>
  </Provider>
);

describe('Render Main.', () => {
  const componentPageNotFound = mount(
    <WrapperPageNotFound>
      <Main />
    </WrapperPageNotFound>,
  );
  it('If the error is in the url, we render page NoFilmsFound', () => {
    const items = componentPageNotFound.find('PageNotFound');
    expect(items.length).toBe(1);
  });

  const componentNoFilmsFound = mount(
    <WrapperNoFilmsFound>
      <Main />
    </WrapperNoFilmsFound>,
  );
  it('If no movies are found, we render page NoFilmsFound', () => {
    const items = componentNoFilmsFound.find('NoFilmsFound');
    expect(items.length).toBe(1);
  });

  const componentSuccessfulSearch = mount(
    <WrapperSuccessfulSearch>
      <Main />
    </WrapperSuccessfulSearch>,
  );
  it('With a successful search, we render 10 MovieItem components', () => {
    const items = componentSuccessfulSearch.find('MovieItem');
    expect(items.length).toBe(10);
  });
});
