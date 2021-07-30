import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { pickTheDataYouWant } from "./challenges/pickTheDataYouWant";

const data = [[4], [5, 3, 5], [2, 3], [6, 5, 4, 8], [9, 10, 7]]; // example nthItem (2) would be [5, 3, 5] & [6, 5, 4, 8]
const arr: number[] = []; //after pickTheDataYouWant gets called this array should equal [5,3,6,5]
const numberOfItemsToGrab = 2;
const nthItem = 2;

ReactDOM.render(
  <React.StrictMode>
    <h1>
      If you want to debug with the console you can call your function here:
    </h1>
    {pickTheDataYouWant(data, arr, nthItem, numberOfItemsToGrab)}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
