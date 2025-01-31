import { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import PhaseFilter from './PhaseFilter';
import SearchBar from './SearchBar';
import toast from 'react-hot-toast';

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
            .then((projects) => setProjects(prevProjects => [...prevProjects, ...projects]))
            .catch(error => toast.error(error.message));
    }

    const handleAddProject = (projectToAdd) => {
        setProjects(prevProjectsList => [...prevProjectsList, projectToAdd])
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePhaseSelection = (e) => {
        if (e.target.textContent === "All") {
            setPhaseSelected("");
        } else {
            const phase = e.target.textContent.replace("Phase ", "");
            setPhaseSelected(Number(phase));
        }
    };

    return (
        <section>
            <ProjectForm handleAddProject={handleAddProject}/>
            <h2>Projects</h2>
            <br />
            <button onClick={handleClick}>Load Projects</button>
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            <PhaseFilter phaseSelected={phaseSelected} handlePhaseSelection={handlePhaseSelection} />
            <ProjectList projects={projects} phaseSelected={phaseSelected} searchQuery={searchQuery} />
        </section>
    );
}

export default ProjectsContainer;