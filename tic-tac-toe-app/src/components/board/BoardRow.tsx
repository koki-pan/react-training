import * as React from 'react';
import { Square } from "../square/Square";

type BoardRowProps = {
  indexArray: Array<number>
  squares: Array<string| null>
  onClick: (i:number)=>void
}

export const BoardRow: React.FC<BoardRowProps> = ({ squares, onClick, indexArray }) => {
    return(
        <div className="board-row">
            {indexArray.map((i) => {
                return (
                    <Square
                        key = {i}
                        value ={squares[i]}
                        onClick={() => onClick(i)}
                    />
                );
            })}
        </div>
    )
}
export default BoardRow