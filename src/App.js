import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import EventBubbling from "./eventBubbling";
import { FallbackRender } from "./errorBoundaries";
import { MemoizedComponent } from "./memoizedComponent";
// import { Input } from "./input";
// import { ParentReference } from "./parent";

function App() {
  return (
    <div className="App">
    
      <ErrorBoundary
        fallbackRender={FallbackRender}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again

        }}
      > 
      <MemoizedComponent value={{}}/>
       </ErrorBoundary>
    </div>
  );
}

export default App;
