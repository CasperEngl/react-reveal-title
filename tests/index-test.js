import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Component from 'src/'

function Example(props) {
  return (
    <Component {...props}>
      <h1>Hello, world!</h1>
    </Component>
  )
}

describe('RevealTitle', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('accepts jsx children to be inserted inside container', () => {
    render(<Example />, node, () => {
      expect(node.getElementsByTagName('h1').length).toBeGreaterThan(0)
    })
  })

  it('outputs the correct message in the title', () => {
    render(<Example />, node, () => {
      expect(node.querySelector('.reveal-title h1').textContent).toContain('Hello, world!')
    })
  })

  it('sets classes correctly on title container', () => {
    render(<Example className="testing" />, node, () => {
      expect(node.querySelector('.reveal-title').classList.contains('testing')).toBeTruthy()
    })
  })
})
