import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let contacts = [
  {
    id: 1,
    name: "scott",
    phone: "555 333 5555"
  },
  {
    id: 2,
    name: "Courtney",
    phone: "555 11 5555"
  },
  {
    id: 3,
    name: "Tim",
    phone: "111 333 5555"
  },
  {
    id: 4,
    name: "Jeff",
    phone: "555 333 1111"
  }
];

ReactDOM.render(<App contacts={contacts} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
