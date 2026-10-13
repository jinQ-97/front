import { useState } from 'react'
import './App.css'
import Board from './component/Board'
import type { Squares } from './types/type'
import Square from './component/Square'


function App() {
  // X ,O  관리
    const [isNext,setIsNext] = useState(true)
  // history 관리
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)])
  // 이동변수
  const [currentMove,setCurrentMove] = useState(0)

  // 이전 history 변수
  const currentSquares = history[currentMove]
  const handlePlay = (nextSquare:Squares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setIsNext(!isNext)
  }
  // history 보여주기
  const jumpTo = (nextMove:number) =>{
    setCurrentMove(nextMove)
    setIsNext(nextMove % 2 == 0)
  }
  const moves = history.map((squares, move) =>{
    let discription
    if(move > 0) {
      discription = "Go to move #"+move
    }else {
      discription = "Go to game start"
    }
    return (
      <li key={move} className='mt-0.5'>
        <button className='bg-gray-300' onClick={()=> jumpTo(move)}>{discription}</button>
      </li>
    
    )
  })

  return (
    <>
      <div className='grid auto-cols-max grid-flow-col gap-4'>
        <Board isNext={isNext} squares={currentSquares} handlePlay={handlePlay}/>
        <ul>
          <li>게임기록</li>
          <ol>{moves}</ol>
        </ul>
      </div>
    </>
  )
}
export default App
