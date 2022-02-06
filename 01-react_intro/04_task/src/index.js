import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const renderGreeting = (elem) => {
  const jsxElem = (
    <div className='greeting'>
      <div className='greeting__title'>Hello, world!</div>
      <div className='greeting__text'>I'm learning React</div>
    </div>
  );

  ReactDOM.render(jsxElem, elem);
};

renderGreeting(rootElement);
