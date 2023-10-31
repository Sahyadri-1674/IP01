import React from 'react'

const Start = (props) => {
  return (
    <div>
      <h1>Let's Play the Game</h1>
      <button onClick={()=>{props.handleClick('play')}}>Start</button>
    </div>
  );
}

export default Start