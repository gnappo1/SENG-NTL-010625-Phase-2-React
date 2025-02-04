import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Header from "./components/navigation/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  //! State has been "lifted up" from Header into App
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (() => {
      fetch("http://localhost:4000/projects")
        .then((res) => res.json())
        .then((projects) =>
          setProjects((prevProjects) => [...prevProjects, ...projects])
        )
        .catch((error) => toast.error(error.message));
    })();
    // loadProjects()
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const handleAddProject = (projectToAdd) => {
    setProjects((prevProjectsList) => [...prevProjectsList, projectToAdd]);
  };

  const handleEditProject = (projectToEdit) => {
    setProjects((prevProjectsList) =>
      prevProjectsList.map((project) =>
        project.id === projectToEdit.id ? projectToEdit : project
      )
    );
  };

  const handleDeleteProject = (projectToRemove) => {
    (async () => {
      try {
        const resp = await fetch(
          `http://localhost:4000/projects/${projectToRemove.id}`,
          {
            method: "DELETE",
          }
        ); //! usually a 204 -> NO CONTENT
        // const data = await resp.json() //! with a json-server on a successful delete you get 200 with the deleted resource back
        if (resp.ok) {
          toast.success(
            `Successfully deleted project with ID:${projectToRemove.id}`
          );
          return;
        }
        throw new Error(
          `Failed to remove project with ID:${projectToRemove.id}`
        );
      } catch (error) {
        setProjects((prevProjects) => [projectToRemove, ...prevProjects]);
        toast.error(error.message);
      }
    })();
    //! bottom line is sync, so happens before the DELETE request processes => OPTIMISTIC
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectToRemove.id)
    );
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Toaster />
      <Outlet
        context={{
          handleAddProject,
          handleEditProject,
          handleDeleteProject,
          projects
        }}
      />
    </div>
  );
};

export default App;