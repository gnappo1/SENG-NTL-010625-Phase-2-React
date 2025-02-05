import { useEffect, useState, useCallback, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Header from "./components/navigation/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./context/ThemeProvider";
import useFetch from "./custom_hooks/useFetch";
const URL = "http://localhost:4000/projects";
const config = {}

const App = () => {
  //! State has been "lifted up" from Header into App
  // const [projects, setProjects] = useState([]);
  const { data, error, loading } = useFetch(URL, config);
  const [projects, setProjects] = useState(data);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (data) {
      setProjects(data)
    }
  }, [data]);

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

  const handleDeleteProject = useCallback((projectToRemove) => {
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
  }, []);

  if (loading) {
    return <h3>Loading...</h3>
  }
  if (error) {
    return <h3>{error.message}</h3>
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header />
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