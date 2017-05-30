import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Button from './Button.js';


it('renders without crashing', () => {
  shallow(<Button />).render();
});

it('renders button', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find('.buttonClass').length).toBe(1);
});

it('test clear button to clear namevalue', () => {
  const wrapper = shallow(<Button />);
  wrapper.find('.buttonClass').simulate('click');
});
