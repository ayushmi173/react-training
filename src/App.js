import React, { useState } from "react";

import "./App.css";
import { ThemeContext } from "./context/themeContext";
import { Counter } from "./counter";

function App() {
  const [theme, setTheme] = useState("");

  const handleClick = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      <ThemeContext.Provider  value={{ theme }}>
        <div>Theme is ready</div>
        <Counter />
        <button onClick={handleClick}>Change Theme</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
