import React from 'react';
import ReactDOM from 'react-dom';
import Status from './Status.jsx';
import './index.scss';

const status = false;

const rootElem = document.querySelector('#root');
ReactDOM.render(<Status status={status} />, rootElem);
