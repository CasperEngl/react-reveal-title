# React Reveal Title

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Reveal Title will only ever reveal itself when it's in the viewport.

## Usage

```
import RevealTitle from '@casperengl/react-reveal-title';

export default () => (
  <RevealTitle
    delay={2} // Delay in seconds
    className="extra class names" // Will add any classes here to the title container
  >
    <h1>Hello, world!</h1> // React Children - will be inserted in a container
  <RevealTitle>
)
```


[build-badge]: https://img.shields.io/travis/CasperEngl/react-reveal-title/master.png?style=flat-square
[build]: https://travis-ci.org/CasperEngl/react-reveal-title

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/@casperengl/react-reveal-title

[coveralls-badge]: https://img.shields.io/coveralls/CasperEngl/react-reveal-title/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/CasperEngl/react-reveal-title
