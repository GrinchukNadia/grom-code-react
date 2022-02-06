import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');
const secondsNow = new Date()

const updateTimer = time => {
  const seconds = new Date(time).getSeconds();
  const color = seconds % 2 === 0 
    ? '#000'
    : '#fff'
  const backgroundColor = seconds % 2 !== 0 
    ? '#000'
    : '#fff'
  
  const style = {
    color,
    backgroundColor,
  }
  
  const element = (
    <div style={style} className='seconds'>{`Now is ${seconds}`}</div>
  );
  
  ReactDOM.render(element, rootElement)
}

setInterval(() => updateTimer(new Date()), 1000)