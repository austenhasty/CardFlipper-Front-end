import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './containers/MainMenu'

export default class App extends Component {


  render() {
  return (
    <div className="App">
      <header className="App-header">



        <MainMenu />
      </header>
    </div>
  );
}
}
