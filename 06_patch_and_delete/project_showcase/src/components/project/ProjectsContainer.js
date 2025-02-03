import { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import PhaseFilter from './PhaseFilter';
import SearchBar from './SearchBar';
import toast from 'react-hot-toast';

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([]);
    const [phaseSelected, setPhaseSelected] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    
    useEffect(() => {
        (() => {
            console.log("I was rendered")
            fetch("http://localhost:4000/projects")
                .then((res) => res.json())
                .then((projects) => setProjects(prevProjects => [...prevProjects, ...projects]))
                .catch(error => toast.error(error.message));
        })()
        // loadProjects()
    }, [])
    
    // const handleClick = () => {
        //     loadProjects();
        // };
        

    const handleAddProject = (projectToAdd) => {
        setProjects(prevProjectsList => [...prevProjectsList, projectToAdd])
    }

    const handleDeleteProject = (idToRemove) => {
        (async () => {
            try {
                const resp = await fetch(`http://localhost:4000/projects/${idToRemove}`, {
                    method: "DELETE"
                }) //! usually a 204 -> NO CONTENT
                // const data = await resp.json() //! with a json-server on a successful delete you get 200 with the deleted resource back
                if (resp.ok) {
                    setProjects(prevProjects => prevProjects.filter(project => project.id !== idToRemove))
                    toast.success(`Successfully deleted project with ID:${idToRemove}`)
                    return
                }
                throw new Error(`Failed to remove project with ID:${idToRemove}`)
            } catch (error) {
                toast.error(error.message)
            }
        })()
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
            {/* <button onClick={handleClick}>Load Projects</button> */}
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
            <PhaseFilter phaseSelected={phaseSelected} handlePhaseSelection={handlePhaseSelection} />
            <ProjectList projects={projects} phaseSelected={phaseSelected} searchQuery={searchQuery} handleDeleteProject={handleDeleteProject} />
        </section>
    );
}

export default ProjectsContainer;