import * as React from 'react';
import { BoardRow } from "./BoardRow";

type BoardProps = {
  squares: Array<string| null>
  onClick: (i:number)=>void
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div>
      {[[0,1,2],[3,4,5],[6,7,8]].map((indexArray,i) => {
        return (
          <div className="game-board">
            <BoardRow 
              key = {i}
              indexArray = {indexArray}
              squares={squares}
              onClick={onClick}
            />
          </div>
        );
      })}
    </div>
  )
}
export default Board

