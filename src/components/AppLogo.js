import React, { Component } from 'react'
import logo from '../images/logo.svg'
import './AppLogo.css'

class AppLogo extends Component {

  render() {
    return (
      <div className="AppLogo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default AppLogo
