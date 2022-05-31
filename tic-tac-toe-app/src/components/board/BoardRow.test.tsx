import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BoardRow from './BoardRow';


describe('BoardRow', () => {
    const testMock = jest.fn()
    const board_row = render(
        <BoardRow
            indexArray={Array.from(Array(9).keys())}
            squares={ Array(9).fill(null) }
            onClick={ testMock }
        />
    );
    test('スナップショットテスト', () => {
        expect(board_row).toMatchSnapshot()
    });
     test('クリックイベントの発火', () => {
        render(
            <BoardRow
                indexArray={Array.from(Array(9).keys())}
                squares={ Array(9).fill(null) }
                onClick={ testMock }
            />
        );
        const btn = screen.getAllByRole('button',{hidden: true })[0]
        fireEvent.click(btn)
        expect(testMock).toHaveBeenCalledTimes(1);
    });
}); 
