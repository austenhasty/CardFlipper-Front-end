import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import NewGame from '../components/NewGame'
import ShowCard from '../components/ShowCard'
import ShowClicks from '../components/ShowClicks'
import a from '../components/images/ak.jpg'
import b from '../components/images/aTrain.jpeg'
import c from '../components/images/cTown.jpeg'
import d from '../components/images/dTheChamp.jpg'
import e from '../components/images/jama.jpeg'
import f from '../components/images/jen.png'
import g from '../components/images/milBike.jpeg'
import h from '../components/images/monkey.jpeg'
import i from '../components/images/theModel.jpeg'
import j from '../components/images/vForVictory.png'
import flatiron from '../components/images/flatiron.png'

const cardImages = [a, b, c, d, e, f, g, h, i, j]

export default class CardList extends Component {
  constructor(){
    super()
    this.state = {
      clicks: 10,
      cardsArray:[]
    }
  }

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks - 1
    })
  }

  componentDidMount() {
    this.generateCards()
  }

 generateCards= () => {
    let gameCards = []
    for (let i=0; i<cardImages.length; i++) {
      for (let j=0; j<3; j++) {
        gameCards.push(cardImages[i])
      }
    }
     this.shuffleDeck(gameCards)
  }

  shuffleDeck= (deck)=>{
    for (let i = 0; i < 500; i++) {
      const index1 = Math.floor(Math.random() * deck.length);
      const index2 = Math.floor(Math.random() * deck.length);
      const temp = deck[index1];
      deck[index1] = deck[index2];
      deck[index2] = temp
    }
    this.setState({cardsArray:deck})
    // return deck
  }

  render(){

    return (
      <div onClick={this.handleClicks}>
        <ShowClicks clicks={this.state.clicks}/>
        <Card.Group itemsPerRow={5}>
          {this.state.cardsArray.map((src, index)=> {
            return <ShowCard key={index} id={index} frontPic={src} backPic={flatiron}/>
          })}
        </Card.Group>
      </div>
    )
  }
}
