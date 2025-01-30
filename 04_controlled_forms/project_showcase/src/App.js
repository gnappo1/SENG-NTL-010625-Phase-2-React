import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import Header from "./components/navigation/Header";
import ProjectsContainer from "./components/project/ProjectsContainer";

const App = () => {
  //! State has been "lifted up" from Header into App
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Toaster />
      <ProjectsContainer />
    </div>
  );
};

export default App;