import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './Button';

const className = 'test';
const testChildren = 'test1';

const setUp = () => mount(<Button className={className}>{testChildren}</Button>);

describe('Button Tests.', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Btn className to be $className + "btn"', () => {
    const classNameProp = component.find('.btn').instance().className;
    expect(classNameProp).toBe(`${className} btn`);
  });

  it('Btn text to be children', () => {
    const childrenProp = component.prop('children');
    const buttonText = component.text();
    expect(buttonText).toBe(childrenProp);
  });
});

describe('Testing button click.', () => {
  const handlerMock = jest.fn();
  const btn = shallow(<Button onClick={handlerMock} />);
  it('Click on the button trigger onClick prop function', () => {
    btn.find('.btn').simulate('click');
    btn.find('.btn').simulate('click');
    expect(handlerMock).toBeCalledTimes(2);
  });
});
