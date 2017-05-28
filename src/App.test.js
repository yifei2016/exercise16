import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders inputs', () => {
  let wrapper = shallow(<App />);
  expect(wrapper.find('.nameInput').length).toBe(1);
  expect(wrapper.find('.emailInput').length).toBe(1);
});

it("initial state name value=''", () => {
  let wrapper = shallow(<App />);
	expect( wrapper.state('namevalue') ).toBe('');
});

it("initial state email value=''", () => {
  let wrapper = shallow(<App />);
	expect( wrapper.state('emailvalue') ).toBe('');
});

it("input name input change test", () => {
  let wrapper = shallow(<App />);
  wrapper.find('.nameInput').simulate('change', {target: {value: 'My new value'}});
  expect(wrapper.state('namevalue')).toBe('My new value');
});

it("input email input change test", () => {
  let wrapper = shallow(<App />);
  wrapper.find('.emailInput').simulate('change', {target: {value: 'My new value'}});
  expect(wrapper.state('emailvalue')).toBe('My new value')
});
