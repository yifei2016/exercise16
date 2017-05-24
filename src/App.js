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
    this.handleInput = this.handleInput.bind(this);
  }
  handleInputname(event){
    this.setState({
      namevalue: event.target.value
    })
  }
  handleInputemail(event){
    this.setState({
      emailvalue: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
       <input placeholder='name' value={this.state.namevalue} onChange={this.handleInput}/>
       <input placeholder='email' value={this.state.emailvalue} onChange={this.handleInputemail}/>
      </div>
    );
  }
}

export default App;
