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
  const nameInput = <input placeholder='name' value=""/>;
  const emailInput = <input placeholder='email' value=""/>;
  expect(wrapper.contains(nameInput)).toBe(true);
  expect(wrapper.contains(emailInput)).toBe(true);
});

it("initial state value=''", () => {
  let wrapper = shallow(<App />);
	expect( wrapper.state('namevalue') ).toBe('');
});
