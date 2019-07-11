import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './containers/MainMenu'

export default class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     flipped: false
  //   }
  // }

  // handleCardFlip = () => {
  //   this.setState({
  //     flipped: true
  //   })
  // }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MainMenu />
      </header>
    </div>
  );
}
}
