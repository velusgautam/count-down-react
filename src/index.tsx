import { useState, useEffect } from 'react'
import getTimeLeft from './get-time'
import { CounterProps } from './index.types'

/**
 * Count Down Render Prop Component
 * @param {Object} props - Count Down properties
 * @param {Date|string|number} props.date - Starting Date for count down
 * @param {function} props.renderer - Render function
 * @param {function} props.updateFrequency - Update frequency function
 */
const CountDown = ({ date, renderer, updateFrequency }: CounterProps) => {
  // throw error if renderer is not of type function
  if (typeof renderer !== 'function') {
    throw new TypeError('Renderer Function is Expected')
  }

  const timingObject = getTimeLeft(date)
  const [, setCounter] = useState(timingObject)
  // setting default update time to 1 seconds
  let updateTimer = 1000

  if (typeof updateFrequency === 'function') {
    updateTimer = updateFrequency(timingObject)
  }

  useEffect(() => {
    if (!timingObject.completed) {
      const interval = setInterval(() => {
        setCounter(getTimeLeft(date))
      }, updateTimer)
      return () => clearInterval(interval)
    }
    return
  }, [date, updateTimer, timingObject.completed])

  return renderer(timingObject)
}

export default CountDown
