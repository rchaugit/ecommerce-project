import './App.module.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Containers/Navbar';

import Home from './Containers/Home';
import Checkout from './Containers/Checkout';
import ProductInfo from './Containers/ProductInfo';

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
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/product/:id">
              <ProductInfo/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;