import { Square } from './Square'
import { render } from '@testing-library/react'


describe('Square', () => {
    const testMock = jest.fn()
    test('スナップショットテスト', () => {
      const square = render(
          <Square  onClick={() => testMock} value={'X'} />
      )
      expect(square).toMatchSnapshot()
    })
})