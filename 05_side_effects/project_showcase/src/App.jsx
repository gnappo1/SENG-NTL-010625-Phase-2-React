import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import Header from "./components/navigation/Header";
import ProjectsContainer from "./components/project/ProjectsContainer";
import Timer from "./components/timer/Timer";

const App = () => {
  //! State has been "lifted up" from Header into App
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTimer, setShowTimer] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleTimer = () => setShowTimer(prevShowTimer => !prevShowTimer);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Toaster />
      <button onClick={toggleTimer}>{showTimer ? "Hide" : "Show"} Timer</button>
      {showTimer && <Timer />}
      <ProjectsContainer />
    </div>
  );
};

export default App;