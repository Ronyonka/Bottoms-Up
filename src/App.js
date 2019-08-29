import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';





class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:id' component={Category}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
