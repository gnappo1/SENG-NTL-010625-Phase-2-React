import ProjectCard from "./ProjectCard";
import projects from "./projects";
console.log("🚀 ~ projects:", projects)

const ProjectsContainer = () => {
    const mappedProjects = projects.map((projectObj) => <ProjectCard key={projectObj.id} projectObj={projectObj}/>)

    return (
      <ul className="projects-list">{mappedProjects}</ul>
    );
}

export default ProjectsContainer;