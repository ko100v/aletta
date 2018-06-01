import React from 'react'

import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import Post from './Post'

test('Render Post <p />', () => {
    const component = shallow(<Post title='My Post' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})

test('Render Post <Link /> ', () => {
    const component = shallow(<Post title='My Post' titleLink />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})