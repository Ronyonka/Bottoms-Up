import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Ingredients from './components/Ingredients';
import SingleIngredient from './components/SingleIngredient';
import Drink from './components/Drink';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ingredients' exact component={Ingredients} />
          <Route path='/ingredients/:id' component={SingleIngredient}/>
          <Route path='/drink/:id' component={Drink}/>          
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
