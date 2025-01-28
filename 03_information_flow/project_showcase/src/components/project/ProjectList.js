import { useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [phaseSelected, setPhaseSelected] = useState("");

  
  const handlePhaseSelection = (e) => {
    if (e.target.textContent === "All") {
      setPhaseSelected("")
    } else {
      const phase = e.target.textContent.replace("Phase ", "")
      setPhaseSelected(Number(phase))
    }
  }
  
  const handleClick = () => {
    loadProjects();
  };
  
  const loadProjects = () => {
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((projects) => setProjects(projects));
  }
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  
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
      {...project}
      />
      ))
  }

  return (
    <section>
      <h2>Projects</h2>
      <br />
      <button onClick={handleClick}>Load Projects</button>

      <div className="filter" onClick={handlePhaseSelection}>
        <button className={phaseSelected === "" ? "active" : ""}>All</button>
        <button className={phaseSelected === 5 ? "active" : ""}>Phase 5</button>
        <button className={phaseSelected === 4 ? "active" : ""}>Phase 4</button>
        <button className={phaseSelected === 3 ? "active" : ""}>Phase 3</button>
        <button className={phaseSelected === 2 ? "active" : ""}>Phase 2</button>
        <button className={phaseSelected === 1 ? "active" : ""}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul className="cards">{renderProjects(searchResults)}</ul>
    </section>
  );
};

export default ProjectList;