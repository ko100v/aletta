import React, { Component } from 'react'
import styles from './Header.css'

import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    const { header, container, title, list, listItem, link } = styles

    return (
      <header className={header}>
        <div className={container}>
          <h1 className={title}>Xogito</h1>
          <nav >
            <ul className={list}>
              <li className={listItem}>
                <Link className={link} to='/'>Posts</Link>
              </li>
              <li className={listItem}>
                <Link className={link} to='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

}

export default Header