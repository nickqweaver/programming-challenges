import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { convertUsers } from "./challenges/convertUsers";
import { level3DB } from "./challenges/data/level3DataBase";

// If you want to debug with the console you can call your function here:
console.log(convertUsers(level3DB));

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
