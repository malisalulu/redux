import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/msg">Msg</Link></p>
        <p><Link to="/Calculator">Calculator</Link></p>
        <div id="example"></div>
      </div>
    );
  }
}

export default App;
