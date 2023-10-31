import React, { useState } from 'react'
// import Start from '../ConditionalRendering/Example/Start';
// import Won from '../ConditionalRendering/Example/Won';

import Start from './Start';
import Lost from './Lost';
import Play from './Play';
import Won from './Won';

const CR3 = () => {

    const [game,setGame] = useState("start");

    const handleClick = (state) => {
        setGame(state);
    }

  return (
    <div>
        <h1>Conditional Rendering</h1>

        {
            (()=>{
               switch(game){
                case "start":
                    return <Start handleClick= {handleClick}/>
                    break;
                case "won":
                    return <Won handleClick={handleClick}/>
                    break;
                case "play":
                    return <Play handleClick={handleClick}/>
                    break;
                case "lost":
                    return <Lost handleClick={handleClick}/>
                default:
                    break;
                    

               }
            })()
        }

    </div>
  )
}

export default CR3