import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const ProjectListItem = ({ id, image, name, link, about, phase, handleDeleteProject, handleEditMode }) => {
  // const {image, name, link, about, phase} = project
  const [clapCount, setClapCount] = useState(0);
  const navigate = useNavigate()

  const handleClap = () => setClapCount(current => current + 1);
  
  const handleEditClick = () => {
    navigate(`/projects/${id}/edit`)
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClap}>
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button
            onClick={() =>
              handleDeleteProject({ id, image, name, link, about, phase })
            }
          >
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}

export default ProjectListItem;

