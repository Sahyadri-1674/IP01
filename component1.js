import React from "react";

function Hello(props){
    return (
        <>
        <div>Hello World</div>
        <h3>{props.day}-{props.month+1}-{props.year}</h3>
        </>
      
    );
}

export default Hello;