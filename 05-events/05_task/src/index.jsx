import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from './Toggler.jsx';
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(
  <Toggler />, 
  rootElem
);
