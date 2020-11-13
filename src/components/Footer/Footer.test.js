import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

it('render footer title', () => {
  const wrapper = shallow(<Footer />);
  const footer = wrapper.find('footer');
  const result = footer.text();

  expect(result).toBe('NetflixRoulette');
});
