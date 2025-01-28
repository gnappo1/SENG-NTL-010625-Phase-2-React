import { useState } from "react";
const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  //! WE NEVER PASS THE set FUNCTION TO A CHILD
  //! bad practice, too much power!!!
  //! If this component owns the state, they own the way it should be changed
  //! Instead we build a little callback that defines how to use the set function
  //! The set function uses a functional approach WHEN YOU ARE CALCULATING THE NEW STATE VALUE BASED ON THE CURRENT ONE
  //! IF YOU DO NOT CARE ABOUT THE CURRENT VALUE WHEN CALCULATING THE NEW ONE, NO FUNCTIONAL FORM IS NEEDED
  const [claps, setClaps] = useState(0)

  // const increaseClapByOne = () => setClaps(claps + 1)
  
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={() => setClaps(prevClapCount => prevClapCount + 1)} className="claps">👏{claps}</button>
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
      </footer>
    </li>
  );
};

export default ProjectListItem;
