<h1 align="center">Count Down React</h1>
<p align="center"><i>A fully customizable light weight countdown component for React using render props written in Typescript.</i></p>
<div align="center">

<a href="https://www.npmjs.com/package/count-down-react"><img src="https://github.com/velusgautam/count-down-react/workflows/Test%20Package/badge.svg" alt="Test Passing"/></a>
<a href="https://www.npmjs.com/package/count-down-react"><img src="https://img.shields.io/bundlephobia/min/count-down-react" alt="Size"/></a>
<a href="https://www.npmjs.com/package/count-down-react"><img src="https://img.shields.io/librariesio/release/npm/count-down-react" alt="Dependency Status"/></a>
<a href="https://www.npmjs.com/package/count-down-react"><img src="https://img.shields.io/npm/v/count-down-react" alt="Version"/></a>

<img src="https://raw.githubusercontent.com/velusgautam/count-down-react/master/assets/count-down.gif" alt="count-down" />

</div>

## Getting Started

You can either install the module via `npm` or `yarn`:

```
npm install count-down-react
```

```
yarn add count-down-react
```

### Basic Example

A simple and example of how to set up a countdown which counts down from 10 seconds.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import CountDown from 'count-down-react'

const CoundownRenderer = ({ days, hours, minutes, seconds }) => (
  <>
    {days} d {hours} h, {minutes} m, {seconds} s
  </>
)

ReactDOM.render(
  <CountDown date={Date.now() + 10000} renderer={CoundownRenderer} />,
  document.getElementById('root')
)
```

## [Live Demo](https://codesandbox.io/s/count-down-ylroo)

# Properties

## date: `number | string | Date`

date is a mandatory prop

## renderer: `function`

You should pass a `Component` to the renderer. The `Component` will be called with props `{days, hours, minutes, seconds, completed}`. You can use it as per your requirement

## updateFrequency: `function`

If you need to change the update frequency of the count down you can pass this function.
The function will be called with `{days, hours, minutes, seconds, completed}`

You should return the frequency in `milliseconds`

example:

```js
<CountDown
  date={date}
  renderer={CoundownRenderer}
  updateFrequency={({ minutes, seconds }) =>minutes * 60 + seconds > 600 ? 5000 : 1000}
/>
```

Here we are updating every 5 seconds till 10 minutes and then every 1 seconds.
