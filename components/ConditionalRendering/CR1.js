import React, { useState } from 'react'

function Message(props){
    if(props.isLoggedIn){
       return <h3>Welcome Back</h3>
    } else {
        return <h3>Welcome Guest. Login First.</h3>
    }
}

function Login(props){
    return <button onClick={props.takeAction}>Login</button>
}

function Logout(props) {
  return <button onClick={props.takeAction}>Logout</button>;
}

function CR1() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <Message isLoggedIn = {isLoggedIn}/>
      {
        isLoggedIn ? <Logout takeAction={handleLogout}/> : <Login takeAction={handleLogin}/>
      }
    </div>
  )
}

export default CR1
