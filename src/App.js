import React from "react";

import "./App.css";
import { FunctionComponent } from "./functionComponent";
import EventBubbling from "./eventBubbling";
import { ApiDataFetching } from "./apiDataFetching";
import { ParentReference } from "./parent";
import { Counter } from "./counter";

function App() {
  console.log("called app")
  return (
    <div className="App">
      {/* <FunctionComponent name={"Training"} age={10} number={14} /> */}
      {/* <EventBubbling/> */}
      {/* <ApiDataFetching/> */}
      <ParentReference/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
