import React from 'react'

import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import PostDetail from './PostDetail'

test('Render PostDetail', () => {
    const component = shallow(<PostDetail />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
})