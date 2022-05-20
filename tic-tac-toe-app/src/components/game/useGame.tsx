import { useState } from 'react';

export type UseGameType = {
    history: {
        squares: (string | null)[];
    }[];
    stepNumber: number;
    xIsNext: boolean;
    calculateWinner: (squares: Array<string|null>) => void;
    jumpTo: (step: number) => void;
    handleClick: (i: number) => void;
    current: {
        squares: (string | null)[];
    };
};

export const useGame = (): UseGameType => {
    const [history, setHistory] = useState<{squares: Array<string|null>}[]>(
        [{ squares: Array(9).fill(null) }]
    );
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [xIsNext, setXIsNext] = useState<boolean>(false);
    const current = history[stepNumber];

    const calculateWinner = (squares: Array<string|null>):string|null => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null;
    }

    const handleClick = (i: number) =>  {
        const nextHistory = history.slice(0, stepNumber + 1);
        
        const current = nextHistory[nextHistory.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(nextHistory.concat([{ squares: squares }]))
        setStepNumber(nextHistory.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step:number) => {
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
    }

    return{
        history,
        stepNumber,
        xIsNext,
        calculateWinner,
        jumpTo,
        handleClick,
        current
    };
};
export default useGame
