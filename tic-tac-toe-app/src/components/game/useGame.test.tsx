import React from 'react';
import useGame from './useGame';
import { renderHook, act } from "@testing-library/react-hooks";


describe('useGame', () => {
    const { result } = renderHook(() => useGame());
    describe('calculateWinner', () => {
        test('勝者を返す', () => {
            const squares = [
                'X', 'X', null,
                'O', 'X', 'O',
                'O', 'O', 'X'
            ]
            act(() => {
                result.current.calculateWinner(squares);
            });
            expect(result.current.calculateWinner(squares)).toBe('X')
        })

        test('勝者がいないときはnullを返す', ()=> {
            const squares = Array(9).fill(null)
            expect(result.current.calculateWinner(squares)).toBe(null)
        })
    }) 
})
