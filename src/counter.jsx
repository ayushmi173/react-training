import React, { useState } from "react";

export const Counter = () => {
  const [count, setState] = useState(1);

  return (
    <>
      <div>Count is: {count}</div>
      <button onClick={() => setState((count) => count * 5)}>Click Me</button>
    </>
  );
};
