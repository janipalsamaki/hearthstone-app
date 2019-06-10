import React from 'react'
import './CardDetails.css'

const CardDetails = ({ card, closeCardDetails }) => (
  <div className="CardDetails" onClick={closeCardDetails}>
    {getImage(card)}
  </div>
)

const getImage = card => {
  const baseUrl = 'https://art.hearthstonejson.com/v1/render/latest/enUS/256x'
  const src = `${baseUrl}/${card.id}.png`

  return <img src={src} alt={card.name} width="256" height="369" />
}

export default CardDetails
