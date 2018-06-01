import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'

import posts from '../../db/blog.post.json'

class Routes extends Component {

    renderPostDetail(props) {
        const post = posts.posts.filter((post => post.slug === props.match.params.slug))

        return (
            <PostDetail {...post[0]} />
        )
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={() => <Home posts={posts.posts} />} />
                <Route path='/about' component={About} />
                <Route path='/post/:slug' component={this.renderPostDetail.bind(this)} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes