import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects, phaseSelected, searchQuery, handleDeleteProject, handleEditMode }) => {

  const filteredProjects = projects.filter(project => {
    return phaseSelected === "" || project.phase === phaseSelected
  })

  const searchResults = filteredProjects.filter(project => {
    return searchQuery === "" || project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const renderProjects = () => {
    return searchResults.map(project => (
      <ProjectListItem
        key={project.id}
        handleDeleteProject={handleDeleteProject}
        handleEditMode={handleEditMode}
        {...project}
      />
    ))
  }

  return (
    <ul className="cards">{renderProjects(searchResults)}</ul>
  );
};

export default ProjectList;