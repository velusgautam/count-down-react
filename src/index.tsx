import { useState, useEffect } from 'react'
import getTimeLeft from './get-time'
import { CounterProps } from './index.types'

const CountDown = ({ date, renderer, updateFrequency }: CounterProps) => {
  if (typeof renderer !== 'function') {
    throw new TypeError('Renderer Function is Expected')
  }
  if (typeof date !== 'number' || date < 0) {
    console.error('Positive Date value expected', date)
  }

  const [counter, setCounter] = useState(getTimeLeft(date))
  let updateTimer = 1000
  if (typeof updateFrequency === 'function') {
    updateTimer = updateFrequency(counter)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(getTimeLeft(date))
    }, updateTimer)
    return () => clearInterval(interval)
  }, [date, updateTimer])

  return renderer(counter)
}

export default CountDown
