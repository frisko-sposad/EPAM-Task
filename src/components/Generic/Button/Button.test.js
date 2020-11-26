import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const setUp = (props) => shallow(<Button {...props} />);

describe('render Button', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('render btn children', () => {
    const wrapper = component.find('btn');
    const result = wrapper.children();
    expect(!!result).toBe(true);
  });
});
