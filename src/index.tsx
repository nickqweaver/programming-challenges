import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { pickTheDataYouWant } from "./challenges/pickTheDataYouWant";

ReactDOM.render(
	<React.StrictMode>
		<h1>
			If you want to debug with the console you can call your function here:
		</h1>
		<>{pickTheDataYouWant}</>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
