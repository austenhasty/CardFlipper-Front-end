import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'



export default class ShowCard extends Component {
  constructor(){
    super()
    this.state = {
      isFlipped: false
    }
  }


  handleCardFlip = () => {
    this.setState(prevState => {
      return {isFlipped: !prevState.isFlipped}
    })
  }


  render() {
    return (
        <Card>
          <img id={this.props.index} className="images" src={this.state.isFlipped? this.props.frontPic : this.props.backPic} alt="OH NO" onClick={this.handleCardFlip}/>
        </Card>
    )
  }
}
