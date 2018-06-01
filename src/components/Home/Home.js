import React from 'react'

import Post from '../Post/Post'

const Home = ({ posts }) => (
  <div>
    {posts.length ?
      posts.map((post) => <Post key={post.slug} {...post} titleLink />)
      : <p>No posts found!</p>}
  </div>

)

export default Home