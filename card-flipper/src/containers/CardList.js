import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import ShowCard from '../components/ShowCard'
import ShowClicks from '../components/ShowClicks'
import WinModal from './WinModal'
import LoseModal from './LoseModal'
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
import ReactDOM from "react-dom";

const cardImages = [a, b, c, d, e, f, g, h, i, j]

export default class CardList extends Component {
  constructor(){
    super()
    this.state = {
      clicks: 10,
      cardsArray:[],
      showWinModal: false,
      showLoseModal: false
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

  toggleWinModal= () => {
    this.setState(prevState => {
      return {showWinModal: !prevState.showWinModal}
    })
  }

  toggleLoseModal= () => {
    this.setState(prevState => {
      return {showLoseModal: !prevState.showLoseModal}
    })
  }

  render(){
    return (
      <React.Fragment>
        <input type="submit" onClick={this.toggleWinModal} value="Win" />
        <input type="submit" onClick={this.toggleLoseModal} value="Loss"/>
        <WinModal showWinModal={this.state.showWinModal} toggleWinModal={this.toggleWinModal}/>
        <LoseModal showLoseModal={this.state.showLoseModal} toggleLoseModal={this.toggleLoseModal} />
        <div onClick={this.handleClicks}>
            {this.state.clicks === 0 ? window.alert("I'm sorry, but you're a LOSER"):null}
            <ShowClicks clicks={this.state.clicks}/>
            <Card.Group itemsPerRow={5}>
              {this.state.cardsArray.map((src, index)=> {
                return <ShowCard key={index} id={index} frontPic={src} backPic={flatiron}/>
              })}
            </Card.Group>
          </div>
        </React.Fragment>
    )
  }
}
