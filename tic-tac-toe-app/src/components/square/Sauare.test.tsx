import { Square } from './Square'
import { render } from '@testing-library/react'

describe('Square', () => {
  test('スナップショットテスト', () => {
    const square = render(
        <Square  onClick={() => jest.fn()} value={'X'} />
    )
    expect(square).toMatchSnapshot()
  })
})