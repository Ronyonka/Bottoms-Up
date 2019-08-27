import React, { Component } from 'react';
import './App.css';
import { toUnicode } from 'punycode';




class App extends Component {
  state = {
    drinks: []
  }
  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(res => res.json())
    .then((data) => {
      this.setState({ drinks:data.drinks })
      console.log(this.state.drinks)
    })
    .catch(console.log)
  }
  render() {
    return (
      <div className="App">
        <h1>Drinks</h1>
        {this.state.drinks.map((drink) => (
          <h5>{drink.strCategory}</h5>
        ))}
      </div>
    );
  }
}

export default App;
