import React, { Component } from 'react'
import './CardDetails.css'

class CardDetails extends Component {

  constructor(props) {
    super(props)
    this.getImage = this.getImage.bind(this)
  }

  render() {
    return (
      <div className="CardDetails" onClick={this.props.closeCardDetails}>
        {this.getImage(this.props.card)}
      </div>
    );
  }

  getImage(card) {
    const src = `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`

    return  <img src={src} alt={card.name} width="256" height="369"/>
  }
}

export default CardDetails