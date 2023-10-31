import React, { useState } from 'react'


const Event1 = () => {

    const [bg,setBg] = useState('purple');
    
    const [message, setMessage] = useState("");
    const [hovered, setHovered] = useState(false);

    const handleClick= (e) => {
        e.preventDefault();
        setBg('red');
    }
    const handleBack = () => {
        setBg('purple');
    }


    const handleInputChange = (e) => {
      setMessage(e.target.value);
    };

    const handleButtonClick = () => {
      alert(`Button Clicked! Message: ${message}`);
    };

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        alert(`Enter key pressed! Message: ${message}`);
      }
    };
  return (
    <div>
      <h1 style={{ backgroundColor: bg }} x>
        This is React Events Tutorial
      </h1>
      <div>
        <button onMouseEnter={handleClick} onDoubleClick={handleBack}>
          Click Me!
        </button>
      </div>
      <h2>Event Handling Example</h2>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleButtonClick}>Click Me</button>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: hovered ? "lightgray" : "white",
          padding: "10px",
        }}
      >
        Hover over me!
      </div>
    </div>
  );
}

export default Event1