import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

export default class ShowCard extends Component {



  render() {
    return (
        <Card >
          <img src={this.props.image} alt="OH NO"/>
        </Card>
    )
  }
}
