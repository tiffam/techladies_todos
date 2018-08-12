import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/About_me';
import ToDos from './components/To_dos';
import ItemModal from './components/itemModal';

import { Provider } from 'react-redux';
import store from './store';

import { NavItem, Navbar, Container } from 'react-materialize';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar>
            <NavItem href="./About_me">About Me
          </NavItem>
            <NavItem href="./To_dos">My To Dos
          </NavItem>
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
                <Container>
                  <ItemModal />
                  <ToDos />
                </Container>
              )}
            />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
