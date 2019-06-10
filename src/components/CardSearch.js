import React from 'react'
import './CardSearch.css'

const CardSearch = ({ handleSearch }) => (
  <div className="CardSearch">
    <input type="text" onChange={handleSearch} />
  </div>
)

export default CardSearch
