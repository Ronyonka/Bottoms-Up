import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';





class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
