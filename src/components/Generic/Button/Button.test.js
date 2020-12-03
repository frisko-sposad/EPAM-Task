import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from './Button';

const className = 'test';
const testChildren = 'test1';

const setUp = () => mount(<Button className={className}>{testChildren}</Button>);

describe('Render Button.', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Btn className to be $className + "btn"', () => {
    const classNameProp = component.find('.btn').instance().className;
    expect(classNameProp).toBe(`${className} btn`);
  });

  it('Btn children to be $testChildren', () => {
    const childrenProps = component.prop('children');
    const childrenTest = component.children().text();
    expect(childrenProps).toBe(childrenTest);
  });
});

describe('Testing button click.', () => {
  const handlerMock = jest.fn();
  handlerMock.mockImplementation((btnState) => [btnState, handlerMock]);
  const btn = shallow(<Button onClick={() => handlerMock(true)} />);

  it('Simulate btn click, btnState to be true', () => {
    btn.find('.btn').simulate('click');
    expect(handlerMock).toBeCalledWith(true);
  });
});
