import React from 'react'

const Won = (props) => {
  return (
    <div>
      <h1>Congratulations You have won this game.</h1>
      <button onClick={()=> props.handleClick("start")}>Play Again</button>
    </div>
  );
}

export default Won