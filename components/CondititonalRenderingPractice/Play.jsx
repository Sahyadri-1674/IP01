import React from 'react'

const Play = (props) => {
  return (
    <div>
        <h1>Playing the game.</h1>
        <button onClick={()=>props.handleClick('won')}>Win</button>
        <button onClick={()=>props.handleClick('lost')}>Loose</button>
        <button onClick={()=>props.handleClick('start')}>Start New Game/</button>
    </div>
  )
}

export default Play