import * as React from 'react'
import Comp from '../index'
import renderer from 'react-test-renderer'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Comp />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
