import { useState } from "react";

const Header = () => {
  //! State updates are async and multiple state updates as a consequence of a single event will be batched together
  const [isDarkMode, setIsDarkMode] = useState(true)
  console.log("I just re-rendered!!!!")

  return (
    <header className={isDarkMode ? "App" : "App light"}>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={e => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark"} Mode</button>
    </header>
  );
}

export default Header;


// Header() => state is 0
// reinvoke Header() => state is 1