import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import SortResultsSection from './SortResultsSection';
import movieBase from '../../MovieBase';
import rootReducer from '../../App.reducers';

const testMovieFound = 55;
const initialState = {
  movie: movieBase[0],
  moviesFound: testMovieFound,
};

const store = createStore(rootReducer, initialState);

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

describe('Tested Sort Result Section', () => {
  const componentWhenWatchingMovie = mount(
    <Wrapper>
      <SortResultsSection isSearchShown />
    </Wrapper>,
  );
  it('Show the genre of found movies', () => {
    const items = componentWhenWatchingMovie.find('span').map((node) => node.text());
    expect(items).toEqual(['Films by: ', 'fantasy genre']);
  });

  const componentWhenSearch = mount(
    <Wrapper>
      <SortResultsSection />
    </Wrapper>,
  );
  it('Show the number of movies found, sorted by date and rating.', () => {
    const span = componentWhenSearch.find('span').map((node) => node.text());
    const button = componentWhenSearch.find('button').map((node) => node.text());
    expect(span).toEqual(['55 movies found', 'Sort by: ']);
    expect(button).toEqual(['release date', 'rating']);
  });
});
