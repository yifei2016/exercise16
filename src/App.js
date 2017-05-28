import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      namevalue: '',
      emailvalue:''
    }

  }
render() {
  return (
    <div className="App">
    <input placeholder='name' className="nameInput" value={this.state.namevalue} />
    <input placeholder='email' className="emailInput" value={this.state.emailvalue} />
    </div>
  )
}
}

export default App;
