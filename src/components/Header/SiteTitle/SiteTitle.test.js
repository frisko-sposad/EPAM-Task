import React from 'react';
import { shallow } from 'enzyme';
import SiteTitle from './SiteTitle';

const setUp = (props) => shallow(<SiteTitle {...props} />);

describe('render SiteTitle', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('render header title typeof = string', () => {
    const wrapper = component.find('h1');
    const result = wrapper.text();
    expect(typeof result).toBe('string');
  });
  it('render header title', () => {
    const wrapper = component.find('h1');
    expect(wrapper.length).toBe(1);
  });
  
  describe('Snapshot SiteTitle', () => {
    it('Snapshot SiteTitle', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
