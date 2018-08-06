import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { NavItem, Navbar } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavItem href='#'><h5>About Me</h5></NavItem>
          <NavItem href='#'><h5>My To Dos</h5></NavItem>
        </Navbar>

        <Header />
      </div>
    );
  }
}

export default App;
