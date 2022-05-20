import React from 'react';
import { render, screen } from '@testing-library/react';
import BoardRow from './BoardRow';
import userEvent from "@testing-library/user-event";


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
        userEvent.click(screen.getByRole('button'));
        expect(testMock).toHaveBeenCalled();
    });
}); 
