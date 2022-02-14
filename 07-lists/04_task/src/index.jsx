import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx';
import './index.scss';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 39,
    name: 'Gorge',
  },
  {
    id: 'id-5',
    age: 22,
    name: 'Hue',
  },
  {
    id: 'id-6',
    age: 56,
    name: 'Bill',
  },
  {
    id: 'id-7',
    age: 61,
    name: 'Henry',
  },
  {
    id: 'id-8',
    age: 19,
    name: 'Dik',
  },
];

const rootElem = document.querySelector('#root');
ReactDOM.render(<UsersList users={users} />, rootElem);
