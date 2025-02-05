import { useMemo } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, phaseSelected, searchQuery, handleDeleteProject }) => {

  const cachedCollection = useMemo(() => {
    console.log("Inside useMemo")
    const filteredProjects = projects && projects.filter((project) => {
      return phaseSelected === "" || project.phase === phaseSelected;
    });

    const searchResults = filteredProjects && filteredProjects.filter((project) => {
      return (
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    const mappedResults = searchResults && searchResults.map((project) => (
      <ProjectListItem
        key={project.id}
        handleDeleteProject={handleDeleteProject}
        {...project}
      />
    ));

    return mappedResults;
  }, [
    projects,
    phaseSelected,
    searchQuery,
    handleDeleteProject,
  ]);

  return <ul className="cards">{cachedCollection}</ul>;
};

export default ProjectList;