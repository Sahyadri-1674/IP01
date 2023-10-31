import React from 'react'

const Lost = (props) => {
  return (
    <div>
        <h1>Lost the Game. Try Again!</h1>
        <button onClick={()=> props.handleClick('start')}>Play Again</button>
    </div>
  )
}

export default Lost