import React from "react";
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = (props) => {
  console.log(props)
  return (
    props.isLoggedin 
      ? <UserGreeting /> 
      : <GuestGreeting />
  )
}

export default Greeting;