# Count Down React ![Test Package](https://github.com/velusgautam/count-down-react/workflows/Test%20Package/badge.svg) ![size](https://img.shields.io/bundlephobia/min/count-down-react) ![dependency](https://img.shields.io/librariesio/release/npm/count-down-react) ![npm](https://img.shields.io/npm/v/count-down-react)

A fully customizable light weight countdown component for React using render props written in Typescript.

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
  updateFrequency={({ minutes }) => (minutes > 10 ? 30000 : 1000)}
/>
```

Here we are updating every 30 seconds till 10 minutes and after that every 1 seconds.
