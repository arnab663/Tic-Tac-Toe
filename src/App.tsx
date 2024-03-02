
import Block from "./components/Block"
import "./App.css"
import { useState } from "react"

function App() {

  const [blockValue, setBlockValue] = useState(Array(9).fill(null))
  const [currTurn, setCurrTurn] = useState("X")

  const checkWinner = (blockValue:any[])=>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0; i<win.length; i++){
      const [a,b,c] = win[i]
      if(blockValue[a] && blockValue[a]===blockValue[b] && blockValue[a]===blockValue[c]) return true
    }
    return false
  }

  const handleBlockClick = (index:number) => {
    const blockValueCopy = Array.from(blockValue)
    if(blockValueCopy[index]) return;
    blockValueCopy[index] = currTurn

    const win = checkWinner(blockValueCopy)
    if(win){
      alert(`${currTurn} has won the game !!`)
    }

    setCurrTurn(currTurn==="X" ? "O" : "X")
    setBlockValue(blockValueCopy)
  }

  console.log(blockValue)

  return(
    <div className="board">
      <div className="row">
        <Block onClick={()=>{handleBlockClick(0)}} value={blockValue[0]}/>
        <Block onClick={()=>{handleBlockClick(1)}} value={blockValue[1]}/>
        <Block onClick={()=>{handleBlockClick(2)}} value={blockValue[2]}/>
      </div>
      <div className="row">
        <Block onClick={()=>{handleBlockClick(3)}} value={blockValue[3]}/>
        <Block onClick={()=>{handleBlockClick(4)}} value={blockValue[4]}/>
        <Block onClick={()=>{handleBlockClick(5)}} value={blockValue[5]}/>
      </div>
      <div className="row">
        <Block onClick={()=>{handleBlockClick(6)}} value={blockValue[6]}/>
        <Block onClick={()=>{handleBlockClick(7)}} value={blockValue[7]}/>
        <Block onClick={()=>{handleBlockClick(8)}} value={blockValue[8]}/>
      </div>
    </div>
  )
}

export default App
