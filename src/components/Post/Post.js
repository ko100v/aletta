import React, { Component } from 'react'
import styles from './Post.css'

import { Link } from 'react-router-dom'

class Post extends Component {

  render() {
    const { title, content, link } = styles

    return (
      <div>
        <h2 className={title}>
          {this.props.titleLink
            ? <Link className={styles.link} to={`/post/${this.props.slug}`}>{this.props.title}</Link>
            : this.props.title}
        </h2>
        <p className={content}>{this.props.excerpt}</p>
      </div>
    )
  }
}

export default Post