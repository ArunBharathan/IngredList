import React, { Component } from 'react';

import './App.css';
import Product from './components/Product';
import Nav from './components/Nav';
class App extends Component {
  render() {
    
    return (
      <div>
        <Nav />
        <div className="App">
        <Product />
        </div>
      </div>
    );
  }
}

export default App;
