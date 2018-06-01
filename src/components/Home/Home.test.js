import React from 'react'

import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import Home from './Home'
import Post from '../Post/Post'
import posts from '../../db/blog.post.json'

test('Render Home', () => {
    const component = shallow(<Home posts={posts.posts} />)
    const tree = toJson(component)
    expect(component.find(Post).length).toBe(posts.posts.length)
    expect(tree).toMatchSnapshot()
})

test('Render Home', () => {
    const component = shallow(<Home posts={[]} />)
    const tree = toJson(component)
    expect(component.find(Post).length).toBe(0)
    expect(tree).toMatchSnapshot()
})