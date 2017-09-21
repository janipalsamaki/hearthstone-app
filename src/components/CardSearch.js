import React, { Component } from 'react'
import './CardSearch.css'

class CardSearch extends Component {

  render() {
    return (
      <div className="CardSearch">
        <input type="text" onChange={this.props.handleSearch}/>
      </div>
    );
  }
}

export default CardSearch
