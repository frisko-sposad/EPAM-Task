import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

const className = 'test';
const testChildren = 'test1';

describe('Button Tests.', () => {
  const handlerMock = jest.fn();
  const component = mount(
    <Button className={className} onClick={handlerMock}>
      {testChildren}
    </Button>,
  );

  it('Btn className to be $className + "btn"', () => {
    const classNameProp = component.find('.btn').instance().className;
    expect(classNameProp).toBe(`${className} btn`);
  });
  it('Btn text to be children', () => {
    const childrenProp = component.prop('children');
    const buttonText = component.text();
    expect(buttonText).toBe(childrenProp);
  });
  it('Click on the button trigger onClick prop function', () => {
    component.find('.btn').simulate('click');
    component.find('.btn').simulate('click');
    expect(handlerMock).toBeCalledTimes(2);
  });
});
