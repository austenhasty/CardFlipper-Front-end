import React, {Component} from 'react'


export default class NavBar extends Component {

  render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">New Game</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
        );
    }
}
