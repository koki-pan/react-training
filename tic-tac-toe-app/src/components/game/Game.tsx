import * as React from 'react';
import useGame from './useGame'
import Board from './../board/Board'
import GameInfo from './GameInfo'

export const Game = () => {
    const { history, handleClick,current,jumpTo } = useGame()
    return(
        <div className="game">
            <Board
                squares={current.squares}
                onClick={(i: number) => handleClick(i)}
            />
            <GameInfo
                history={history}
                current={current}
                jumpTo={jumpTo}
            />
        </div>
    );
}

export default Game
