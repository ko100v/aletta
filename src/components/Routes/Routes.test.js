import React from 'react'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { MemoryRouter } from 'react-router'

import Routes from './Routes'
import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'

test('Render Home', () => {
    const component = mount(
        <MemoryRouter
            initialEntries={['/']}
            initialIndex={0}>
            <Routes />
        </MemoryRouter>
    )

    expect(component.find(Home).length).toBe(1)
})

test('Render About', () => {
    const component = mount(
        <MemoryRouter
            initialEntries={['/about']}
            initialIndex={0}>
            <Routes />
        </MemoryRouter>
    )

    expect(component.find(About).length).toBe(1)
})

test('Render PostDetail', () => {
    const component = mount(
        <MemoryRouter
            initialEntries={['/post/:slug']}
            initialIndex={0}>
            <Routes />
        </MemoryRouter>
    )

    expect(component.find(PostDetail).length).toBe(1)
})

test('Render 404 Not Found', () => {
    const component = mount(
        <MemoryRouter
            initialEntries={['/404 Not Found']}
            initialIndex={0}>
            <Routes />
        </MemoryRouter>
    )

    expect(component.find(NotFound).length).toBe(1)
})