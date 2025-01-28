import { use, useState } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
  const [searchInput, setSearchInput] = useState("")
  const [phaseSelected, setPhaseSelected] = useState("")


  const filteredProjectsBySearch = projects.filter(project => project.name.toLowerCase().includes(searchInput.toLowerCase()) || project.about.toLowerCase().includes(searchInput.toLowerCase()))

  const filteredProjectByPhase = filteredProjectsBySearch.filter(project => phaseSelected === "" || project.phase === phaseSelected)
  
  const projectListItems = filteredProjectByPhase.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ))


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter" onClick={e => {
        const phaseSelect = e.target.innerText.replace("Phase ", "")
        setPhaseSelected(phaseSelect === "All" ? "" : parseInt(phaseSelect) )
      }}>
        <button className={phaseSelected === "" ? "active" : ""}>All</button>
        <button className={phaseSelected === 5 ? "active" : ""}>Phase 5</button>
        <button className={phaseSelected === 4 ? "active" : ""}>Phase 4</button>
        <button className={phaseSelected === 3 ? "active" : ""}>Phase 3</button>
        <button className={phaseSelected === 2 ? "active" : ""}>Phase 2</button>
        <button className={phaseSelected === 1 ? "active" : ""}>Phase 1</button>
      </div>
      <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search..." />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
