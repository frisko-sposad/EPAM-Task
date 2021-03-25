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

const urls = ['*', '/', '/search'];
const componentsNames = ['PageNotFound', 'NoFilmsFound', 'MovieItem'];
const componentsFound = [1, 1, 10];

describe('Render Main.', () => {
  urls.forEach((url, i) => {
    const component = mount(
      <Wrapper url={url}>
        <Main />
      </Wrapper>,
    );
    it(`If url="${url}", we found ${componentsFound[i]} ${componentsNames[i]}`, () => {
      const items = component.find(componentsNames[i]);
      expect(items.length).toBe(componentsFound[i]);
    });
  });
});
