import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { pickTheDataYouWant } from "./challenges/pickTheDataYouWant";

ReactDOM.render(
	<React.StrictMode>
		<h1>
			If you want to debug with the console you can call your function here:
		</h1>
		<>
			{pickTheDataYouWant<number>([
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8, 9, 10],
				[11, 12, 13, 14, 15],
				[16, 17],
			])}
		</>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
