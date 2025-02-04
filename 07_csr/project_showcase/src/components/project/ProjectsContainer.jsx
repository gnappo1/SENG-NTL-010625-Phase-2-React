import { useState } from 'react';
import ProjectList from './ProjectList';
import PhaseFilter from './PhaseFilter';
import SearchBar from './SearchBar';
import { useOutletContext } from 'react-router-dom';

const ProjectsContainer = () => {
    const [phaseSelected, setPhaseSelected] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const { handleDeleteProject, projects} = useOutletContext();
    
    // const handleClick = () => {
        //     loadProjects();
        // };

    
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
            <h2>Projects</h2>
            <br />
            {/* <button onClick={handleClick}>Load Projects</button> */}
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            <PhaseFilter phaseSelected={phaseSelected} handlePhaseSelection={handlePhaseSelection} />
            <ProjectList projects={projects} phaseSelected={phaseSelected} searchQuery={searchQuery} handleDeleteProject={handleDeleteProject} />
        </section>
    );
}

export default ProjectsContainer;