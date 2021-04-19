import React from 'react';
import { mount } from 'enzyme';
import Main from './Main';
import movieBase from '../MovieBase';

const moviesObject = [0, undefined, movieBase];
const componentsNames = ['NoFilmsFound', 'NoFilmsFound', 'MovieItem'];
const componentsFound = [1, 1, movieBase.length];

describe('Render Main.', () => {
  moviesObject.forEach((element, i) => {
    const component = mount(<Main movies={element} />);

    it(`If movies=${element?.length > 0 ? element.length : element}, we found ${componentsFound[i]} ${
      componentsNames[i]
    }`, () => {
      const items = component.find(componentsNames[i]);
      expect(items.length).toBe(componentsFound[i]);
    });
  });
});
