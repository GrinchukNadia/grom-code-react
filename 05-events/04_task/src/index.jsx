import React from "react";
import ReactDOM from "react-dom";
import Colors from "./Colors.jsx";
import "./index.scss"

const RED ="#f00";
const GREEN ="#0f0";
const BLUE ="#00f";

const rootElem = document.querySelector('#root');
ReactDOM.render(
  <>
    <Colors color={RED} />
    <Colors color={GREEN} />
    <Colors color={BLUE} />
  </>,
  rootElem
);
