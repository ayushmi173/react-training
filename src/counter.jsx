import React, { useContext, useState } from "react";

import { ThemeContext } from "./context/themeContext";

export const Counter = () => {
  const [count, setState] = useState(1);
  const { theme } = useContext(ThemeContext);

  const style = {
    height: "400px",
    width: "400px",
    backgroundColor: "black",
    ...(theme === "light" ? { color: "green" } : { color: "red" }),
  };

  const handleClick = () => {
    setState((count) => count * 5);
  };
  return (
    <>
      <div style={style}>Count is: {count}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};
