import React from 'react';
import { render } from '@testing-library/react';

import Board from './Board';


describe('Board', () => {
    test('スナップショットテスト', () => {
        const board = render(
            <Board
                squares={ Array(9).fill(null) }
                onClick={ jest.fn() }
            />
        );
        expect(board).toMatchSnapshot()
  });
}); 
