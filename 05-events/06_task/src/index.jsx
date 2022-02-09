import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker.jsx';
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(
  <ColorPicker />, 
  rootElem
);
