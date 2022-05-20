import * as React from 'react';
import useGame from './useGame'

type GameInfoProps = {
    history: {
        squares: (string | null)[];
    }[];
    current: {
        squares: any[];
    };
    jumpTo: (step:number)=>void
}

export const GameInfo: React.FC<GameInfoProps> = ({ history, current,jumpTo}) => {
    const {xIsNext,calculateWinner} = useGame()
    let winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move: number) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner === null) {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    } else {
      status = 'Winner: ' + winner;
    }
    return(
        <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>
    );
    
}

export default GameInfo

