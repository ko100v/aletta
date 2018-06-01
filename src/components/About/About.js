import React, { Component } from 'react'
import styles from './About.css'

class About extends Component {

  render() {
    const { heading, bio } = styles

    return (
      <div>
        <h1 className={heading}>Hi, I am Dimitar Kostov</h1>
        <p className={bio}>This section is all about me, yay!</p>
      </div>
    )
  }

}

export default About