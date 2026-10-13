import { useState } from "react";
import type { Squares } from "../types/type";
import { calculateWinner } from "../util/utils";
import Square from "./Square";

const Board = ({isNext, squares, handlePlay}) => {
    // 9개 Square 의 state 관리
    // const initialSquares - [null...x9]
    // const initialSquares:Squares = Array(9).fill(null)
    // 9r개의 Square 의 state 관리
    // const [squares,setSquares] = useState(initialSquares)
    
    //

    // 승자 관리
    const winner = calculateWinner(squares)

    let status = ""
    if(winner){
        status = "Winner : " + winner
    }else {
        status = "Next Player : " + (isNext ? "X" : "O")
    }
    
    const handleClick = (idx:number) => {
        // 이미 선택된 박스라면 선택 불가
        if(squares[idx] || calculateWinner(squares)) return

        // ...과 같은 역할 === slice()

        // 기존 배열복사
        // const copySquares = [...squares]
        const copySquares = squares.slice()
        // X or O 번갈아 실행
        if (isNext) { 
            copySquares[idx] = "X"
        } else {
            copySquares[idx] = "O"
        }

        // setIsNext(!isNext)
        // setSquares(copySquares)
        handlePlay(copySquares)
    }


    return (
        <div>
            <div>{status}</div>
            <div className="board-row">
                <Square value={squares[0]} handleClick={()=>handleClick(0)}>1</Square>
                <Square value={squares[1]} handleClick={()=>handleClick(1)}>2</Square>
                <Square value={squares[2]} handleClick={()=>handleClick(2)}>3</Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} handleClick={()=>handleClick(3)}>4</Square>
                <Square value={squares[4]} handleClick={()=>handleClick(4)}>5</Square>
                <Square value={squares[5]} handleClick={()=>handleClick(5)}>6</Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleClick={()=>handleClick(6)}>7</Square>
                <Square value={squares[7]} handleClick={()=>handleClick(7)}>8</Square>
                <Square value={squares[8]} handleClick={()=>handleClick(8)}>9</Square>
            </div>
        </div>
    );
};

export default Board;