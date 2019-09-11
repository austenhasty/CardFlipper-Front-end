import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import CardList from './CardList'
import NavBar from './NavBar'


export default class Playgame extends Component {


  render() {
    return (
      <div>
        <React.Fragment>
          <NavBar />
        </React.Fragment>
        <CardList/>
    </div>
        )
  }
}
