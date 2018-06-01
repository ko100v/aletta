import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import toJson from 'enzyme-to-json'

import Header from './Header'

test('Header component should render as expected', () => {
  const component = shallow(<Header />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})