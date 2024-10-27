import * as React from 'react'
import CountDown from '../index'
import { render, screen } from '@testing-library/react'

interface RendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

describe('Count Down Component Test Suite', () => {
  const CountDownRenderer: React.FC<RendererProps> = ({
    days,
    hours,
    minutes,
    seconds,
  }) => {
    return (
      <div data-testid="counter">{`${days} d ${hours} h ${minutes} m ${seconds} s`}</div>
    )
  }
  const date = Date.now() + 6000

  it('renders the countdown correctly', () => {
    render(
      <CountDownRenderer
        days={1}
        hours={2}
        minutes={3}
        seconds={4}
        completed={false}
      />
    )

    expect(screen.getByText('1 d 2 h 3 m 4 s')).toMatchSnapshot()
  })

  test('Test if the value of time is rendered correctly', async () => {
    const { getByText } = render(
      <CountDown date={date} renderer={CountDownRenderer} />
    )
    expect(getByText(`0 d 0 h 0 m 6 s`)).toBeTruthy()
  })

  test('Test if the value of time is rendered with Id', async () => {
    const { getByTestId } = render(
      <CountDown date={date} renderer={CountDownRenderer} />
    )
    expect(getByTestId('counter').textContent).toBe('0 d 0 h 0 m 6 s')
  })

  test('Test if the count down working with updateFrequency', async () => {
    const { getByTestId } = render(
      <CountDown
        date={date}
        renderer={CountDownRenderer}
        updateFrequency={() => 1000}
      />
    )
    expect(getByTestId('counter').textContent).toBe('0 d 0 h 0 m 6 s')
  })
})
