import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator.jsx';
// import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Calculator userId='GitHub' />, rootElem);
