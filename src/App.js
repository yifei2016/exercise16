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
    this.handleInputname = this.handleInputname.bind(this);
  }
  handleInputname(e){
    this.setState({
      namevalue: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <input placeholder='name' className="nameInput" value={this.state.namevalue} onChange={this.handleInputname}/>
      <input placeholder='email' className="emailInput" value={this.state.emailvalue} />
      </div>
    )
  }
}

export default App;
