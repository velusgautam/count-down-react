import * as React from 'react'
import CountDown from '../index'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
describe('Count Down Component Test Suite', () => {
  const CoundownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    return (
      <div data-testid="counter">{`${days} d ${hours} h ${minutes} m ${seconds} s`}</div>
    )
  }
  const date = Date.now() + 6000

  test('Count Down Snapshot Test', () => {
    const component = renderer.create(
      <CountDown date={date} renderer={CoundownRenderer} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Test if the value of time is rendered correctly', async () => {
    const { getByText } = render(
      <CountDown date={date} renderer={CoundownRenderer} />
    )
    expect(getByText(`0 d 0 h 0 m 6 s`)).toBeTruthy()
  })

  test('Test if the value of time is rendered with Id', async () => {
    const { getByTestId } = render(
      <CountDown date={date} renderer={CoundownRenderer} />
    )
    expect(getByTestId('counter').textContent).toBe('0 d 0 h 0 m 6 s')
  })

  test('Test if the count down working with updateFrequency', async () => {
    const { getByTestId } = render(
      <CountDown
        date={date}
        renderer={CoundownRenderer}
        updateFrequency={() => 1000}
      />
    )
    expect(getByTestId('counter').textContent).toBe('0 d 0 h 0 m 6 s')
  })
})
