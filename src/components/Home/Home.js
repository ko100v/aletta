import React from 'react'

import Post from '../Post/Post'

const Home = ({ posts }) => (
  <div>
    {posts.length ?
      posts.map((post) => <Post key={post.slug} {...post} titleLink />)
      : <p>Awaiting Posts!</p>}
  </div>

)

export default Home