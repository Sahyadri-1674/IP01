import React from 'react'

const Lost = (props) => {
  return (
    <div>
        <h1>You Lost the Game. Better luck next time.</h1>
        <button onClick={()=> props.handleClick('start')}>Try Again!</button>
    </div>
  )
}

export default Lost