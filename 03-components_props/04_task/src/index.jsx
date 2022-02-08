import React from "react";
import ReactDOM from "react-dom";
import "./index.scss"
import Greeting from "./Greeting.jsx"

const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2019-12-31T11:11:11.819Z')
}

const rootElem = document.querySelector('#root');
ReactDOM.render(
  <Greeting 
    firstName={user.firstName}
    lastName={user.lastName}
    birthDate={user.birthDate} 
  />,
  rootElem
);
