import React, { Component } from 'react'
import AppHeader from './AppHeader'
import AppLogo from './AppLogo'
import CardDetails from './CardDetails'
import CardSearch from './CardSearch'
import CardSearchResults from './CardSearchResults'
import cards from '../cards/cards.json'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: this.props.cards,
      selectedCard: null
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.setSelectedCard = this.setSelectedCard.bind(this)
    this.closeCardDetails = this.closeCardDetails.bind(this)
  }

  render() {
    return (
      <div className="App">
        <AppHeader>
          <AppLogo />
          <CardSearch
            cards={this.props.cards}
            handleSearch={this.handleSearch}
          />
        </AppHeader>
        {this.state.searchResults.length > 0 ? (
          <CardSearchResults
            results={this.state.searchResults}
            handleClick={this.setSelectedCard}
          />
        ) : null}
        {!!this.state.selectedCard ? (
          <CardDetails
            card={this.state.selectedCard}
            closeCardDetails={this.closeCardDetails}
          />
        ) : null}
      </div>
    )
  }

  handleSearch(e) {
    const search = e.target.value.toLowerCase()

    const filteredResults = this.props.cards.filter(
      card =>
        (card.hasOwnProperty('name') &&
          card.name.toLowerCase().includes(search)) ||
        (card.hasOwnProperty('text') &&
          card.text.toLowerCase().includes(search))
    )

    this.setState({ searchResults: filteredResults })
  }

  setSelectedCard(card) {
    this.setState({ selectedCard: card })
  }

  closeCardDetails() {
    this.setState({ selectedCard: null })
  }
}

App.defaultProps = {
  cards
}

export default App
