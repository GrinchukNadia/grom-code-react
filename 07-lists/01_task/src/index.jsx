import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList.jsx';
import './index.scss';

const numbers = ['1', '2', '3', '4']

const rootElem = document.querySelector('#root');
ReactDOM.render(<NumbersList numbers={numbers} />, rootElem);
