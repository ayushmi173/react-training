import React, { useState } from "react";

import "./App.css";
import { ThemeContext } from "./context/themeContext";
// import { Counter } from "./counter";
import { ProfilerComp } from "./profilerComp";
import {PortalDemo} from './portal'
 // import { Parent } from "./parent";

function App() {
  const [theme, setTheme] = useState("");

  const handleClick = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme }}>
        <div>Theme is ready</div>
        {/* <Counter /> */}
        <ProfilerComp />
        <PortalDemo/>
        {/* <ProfilerComp /> */}
        {/* <Parent name={"fheuhfe"} age={"fehfuheuhfkejfe"} /> */}
        <button onClick={handleClick}>Change Theme</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
