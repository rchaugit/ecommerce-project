import './App.module.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Containers/Navbar';

import Home from './Containers/Home';
import Checkout from './Containers/Checkout';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route path="/about">
              
            </Route>
            <Route path="/contact">
              
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;