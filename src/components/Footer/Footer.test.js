import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('Is the footer title equal to NetflixRoulette?', () => {
  const footerText = shallow(<Footer />).text();

  expect(footerText).toBe('NetflixRoulette');
});
