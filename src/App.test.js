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
  const nameInput = <input placeholder='name'/>;
  const emailInput = <input placeholder='email'/>;
  expect(wrapper.contains(nameInput)).toBe(true);
  expect(wrapper.contains(emailInput)).toBe(true);
});
