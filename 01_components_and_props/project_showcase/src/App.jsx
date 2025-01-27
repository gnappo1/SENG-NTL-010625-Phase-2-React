// import {Header as RenamedHeader} from "./Header"; //! import as named, NEED {}
import Header from "./Header"; //! AS DEFAULT, recall it whatever you'd like
import ProjectsContainer from "./ProjectsContainer";

const App = () => {
  //! RULES OF RENDERING
  //! 1. you always have to have a SINGLE PARENT element (we used a fragment, real parent but not displayed onto the DOM)
  //! 2. Something should be returned
  //! 3. We render a component by using < />
  //! 4. YOU CANNOT RENDER OBJECTS as they are
  //! 5. Inside JSX you can ONLY use ternary expressions

  const projectTitle = "Project Showcase";

  return (
    <>
      <Header propName={projectTitle}/>
      <ProjectsContainer />
    </>
  );
}

export default App