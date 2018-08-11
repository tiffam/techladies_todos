import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/About_me';
import ToDos from './components/To_dos';
import { NavItem, Navbar } from 'react-materialize';
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavItem><h5><Link to="./About_me">About Me</Link></h5></NavItem>
          <NavItem><h5><Link to="./To_dos">My To Dos</Link></h5></NavItem>
        </Navbar>
        <main>
          <Route
            path='/About_me'
            render={() => (
              <AboutMe />
            )}
          />
          <Route
            path='/To_dos'
            render={() => (
              <ToDos />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
