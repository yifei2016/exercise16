import React from 'react';
// import ReactDOM from 'react-dom';
import Button from './Button.js';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Button />).render();
});

it('renders button', () => {
  const wrapper = shallow(<Button />);
  const button = <button></button>;
  expect(wrapper.contains(button)).toBe(true);
});
