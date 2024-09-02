import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import EventBubbling from "./eventBubbling";
import { FallbackRender } from "./errorBoundaries";
import { MemoizedComponent } from "./memoizedComponent";
// import { Input } from "./input";
// import { ParentReference } from "./parent";

import Root from "./root";
import { ParentReference } from "./parent";
import { Input } from "./input";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Root />,
    },
    {
      path: "/testing",
      element: <Root />,
    },
    {
      path: "/home",
      element: <div>Home component is called</div>,
    },
    { path: "/parent", element: <ParentReference /> },
  ]);

  return (
    <div className="App">
      <ErrorBoundary
        fallbackRender={FallbackRender}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        {/* <RouterProvider router={router} /> */}
        <EventBubbling />
        {/* <Input/> */}
        {/* <MemoizedComponent value={10} /> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
