import React from 'react'

const Start = (props) => {
  return (
    <div>
        <h1>Welcome Gamer. Let's Start the Game.</h1>
        <button onClick={()=>props.handleClick('playing')}>Play</button>
    </div>
  )
}

export default Start