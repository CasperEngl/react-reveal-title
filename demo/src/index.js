import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>React Reveal Title Demo</h1>
      <Example style={{ display: 'inline-block' }}>
        <h1 style={{ margin: '0' }}>Hello, world!</h1>
      </Example>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
