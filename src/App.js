import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Route exact path='/' component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImages} />
        </main>
      </div>
    );
  }
}

export default App;
