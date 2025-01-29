import { useState } from "react";
import Header from "./components/navigation/Header";
import ProjectsContainer from "./components/project/ProjectsContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ProjectsContainer />
    </div>
  );
};

export default App;
