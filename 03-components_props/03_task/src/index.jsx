import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss"
import Comment from "./Comment.jsx"

const author = {
  user: {
    name: 'Tom tom',
    avatarUrl: 'https://avatars.githubusercontent.com/u/9919?s=460&v=4',
  },
  text: 'Some text',
  date: new Date(),
};

const rootElem = document.querySelector('#root');
ReactDOM.render(
  <Comment author={author} />,
  rootElem
);
