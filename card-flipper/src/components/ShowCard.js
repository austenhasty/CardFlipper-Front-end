import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

export default class ShowCard extends Component {



  render() {
    return (
      <div>
        <Card >
          <img src={this.props.image} alt="OH NO"/>
        </Card>
      </div>
    )
  }
}
