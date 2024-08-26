import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);

  root.render(
    <React.StrictMode>
      <App />
  </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   React.createElement("div", {}, <p>Paragraph looks beautiful from with div</p>),
//   document.getElementById('root')
// );

// * How createRoot Works

// ReactDOM.createRoot(container): This creates a root for your React application. It replaces the old ReactDOM.render method.

// Concurrent Rendering: createRoot enables concurrent rendering, which allows React to interrupt rendering if needed and make updates more efficiently. This is especially useful for complex applications where performance can be a concern.

// *  What is concurrent rendering?

// - In a nutshell, concurrent rendering enables React to work on multiple tasks at once without blocking the main thread.
// - Concurrent Mode is a feature in React that allows for more responsive user interfaces by breaking down the rendering work
//  into smaller chunks and prioritizing which parts of the UI to render first.

// * React.StrictMode: Wrapping your app in React.StrictMode helps you find potential issues in your application by running additional checks and warnings.
