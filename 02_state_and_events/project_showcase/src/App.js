import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

const App = () => {
  //! Re-rendering a component means re-invoking the component function
  // let oldNormalVar = 0; //! let/const old local variables are reset on every render!!!

  //! We use state when we want ot track values across re-renderings and reflect the changes onto the page
  //! useState is a hook - aka a pre-existing function that brings some functionality in a functional component
    //! 1. Can only be used inside a functional component
    //! 2. They have to start with the word "use"
    //! 3. Can only be used at the top-level of your functional component, it cannot run conditionally!!
  //! State is horizontal, meaning one component tracks something internally -> LOCAL STATE
  //! The [] on the left are for ARRAY DESTRUCTURING because useState always returns an array with the variable in first position and the function in second position
  //! YOU CANNOT MODIFY THE STATE VARIABLE WITHOUT USING THE STATE FUNCTION -> THE COMPONENT WON'T RERENDER OTHERWISE!!!!
  // const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div>
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
