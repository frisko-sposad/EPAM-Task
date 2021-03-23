import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import SortResultsSection from './SortResultsSection';
import movieBase from '../../MovieBase';
import rootReducer from '../../App.reducers';

const testMoviesFound = 55;
const initialState = {
  movie: movieBase[0],
  moviesFound: testMoviesFound,
};

const store = createStore(rootReducer, initialState);

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

const getNodeText = (element) => element.text();

describe('Tested Sort Result Section', () => {
  const SortResultsSectionWithSearchByGenre = mount(
    <Wrapper>
      <SortResultsSection isSearchShown />
    </Wrapper>,
  );
  it('Show the genre of found movies', () => {
    const items = SortResultsSectionWithSearchByGenre.find('span').map(getNodeText);
    expect(items).toEqual(['Films by: ', 'fantasy genre']);
  });

  const SortResultsSectionWithSearchInfo = mount(
    <Wrapper>
      <SortResultsSection />
    </Wrapper>,
  );
  it('Show the number of movies found, sorted by date and rating.', () => {
    const span = SortResultsSectionWithSearchInfo.find('span').map(getNodeText);
    const button = SortResultsSectionWithSearchInfo.find('button').map(getNodeText);
    expect(span).toEqual(['55 movies found', 'Sort by: ']);
    expect(button).toEqual(['release date', 'rating']);
  });
});
