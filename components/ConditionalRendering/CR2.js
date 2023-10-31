import React, { useState } from "react";
import Start from "./Example/Start";
import Lost from "./Example/Lost";
import Playing from "./Example/Playing";
import Won from "./Example/Won";

const CR2 = () => {
  const [game, setGame] = useState("start");

  const handleClick = (gameState) => {
    setGame(gameState);
  };
  return (
    <div>
      <h1>Our Cool Game Demo.</h1>
      {(() => {
        switch (game) {
          case "start":
            return <Start handleClick={handleClick} />;
          case "playing":
            return <Playing handleClick={handleClick} />;
          case "won":
            return <Won handleClick={handleClick} />;
          case "lost":
            return <Lost handleClick={handleClick} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default CR2;
