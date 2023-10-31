import React from 'react'

const Won = (props) => {
  return (
    <div>
        <h1>Congratulations. You Won!!</h1>
        <button onClick={()=> props.handleClick('start')}>New Game</button>
    </div>
  )
}

export default Won