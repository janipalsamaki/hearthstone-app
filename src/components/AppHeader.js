import React, { Component } from 'react'
import './AppHeader.css'

class AppHeader extends Component {

  render() {
    return (
      <div className="AppHeader">
        {this.props.children}
      </div>
    )
  }
}

export default AppHeader
