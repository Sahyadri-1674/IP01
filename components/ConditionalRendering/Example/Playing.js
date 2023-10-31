import React from 'react'

const Playing = (props) => {
  return (
    <div>
      <h1>Playing the game Page here.</h1>
      <button onClick={() => props.handleClick("won")}>Won</button>
      <button onClick={() => props.handleClick("lost")}>Lost</button>
      <button onClick={() => props.handleClick("start")}>New Game</button>
    </div>
  );
}

export default Playing