import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from './History';
import TaxCalculator from './containers/TaxCalculator/TaxCalculator';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router history = {history}>
        <Route path="/" component={TaxCalculator}/>
      </Router>
    );
  }
}

export default App;
