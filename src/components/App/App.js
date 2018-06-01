import React, { Component } from 'react'

import styles from './App.css'

import Header from '../Header/Header'
import Routes from '../Routes/Routes'

import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    const { container } = styles

    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={container}>
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App