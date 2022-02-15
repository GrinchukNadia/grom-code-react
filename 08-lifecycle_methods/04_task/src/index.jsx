import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.jsx';
import './index.scss';

const userId = 'Facebook';

const rootElem = document.querySelector('#root');
ReactDOM.render(<User userId={userId} />, rootElem);
