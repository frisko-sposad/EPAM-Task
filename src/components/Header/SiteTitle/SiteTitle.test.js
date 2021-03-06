import React from 'react';
import { mount } from 'enzyme';
import SiteTitle from './SiteTitle';

describe('render SiteTitle', () => {
  it('Do we Have only one H1 title in the SiteTitle', () => {
    const siteTitleH1 = mount(<SiteTitle />)
      .find('h1')
      .text();
    expect(siteTitleH1).toBe('NetflixRoulette');
  });
});
