import React from 'react';
import './greeting.scss';


const Greeting = (props) => {
  const ageDifference =
    new Date('2020-01-01T11:11:11.819Z') - new Date(props.birthDate);
  const age = Math.abs(new Date(ageDifference).getUTCFullYear() - 1970);
  return (
    <div className='greeting'>{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
  )
}

export default Greeting;