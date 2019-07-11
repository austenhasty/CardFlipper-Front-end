import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip';

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
      // <ReactCardFlip flipped={this.state.isFlipped} flipDirection="vertical">
        <Card >
          <img id={this.props.index} className="images" src={this.state.isFlipped? this.props.frontPic : this.props.backPic} alt="OH NO" onClick={this.handleCardFlip}/>
        </Card>
      // </ReactCardFlip>
    )
  }
}
