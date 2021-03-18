import React from 'react';
import { shallow } from 'enzyme';
import SiteTitle from './SiteTitle';

describe('render SiteTitle', () => {
  it('Do we Have only one H1 title in the SiteTitle', () => {
    const siteTitleH1 = shallow(<SiteTitle />).text();
    expect(siteTitleH1).toBe('NetflixRoulette');
  });
});
