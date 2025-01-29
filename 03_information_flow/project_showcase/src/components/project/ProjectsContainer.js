import { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import PhaseFilter from './PhaseFilter';
import SearchBar from './SearchBar';

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([]);
    const [phaseSelected, setPhaseSelected] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = () => {
        loadProjects();
    };

    const loadProjects = () => {
        fetch("http://localhost:4000/projects")
        .then((res) => res.json())
        .then((projects) => setProjects(projects));
    }

    return (
        <section>
            <ProjectForm />
            <h2>Projects</h2>
            <br />
            <button onClick={handleClick}>Load Projects</button>
            <SearchBar setSearchQuery={setSearchQuery} />
            <PhaseFilter phaseSelected={phaseSelected} setPhaseSelected={setPhaseSelected} />
            <ProjectList projects={projects} phaseSelected={phaseSelected} searchQuery={searchQuery} />
        </section>
    );
}

export default ProjectsContainer;
