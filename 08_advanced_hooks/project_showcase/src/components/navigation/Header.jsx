import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  //! LOCAL STATE
  //! the hook returns an array with ALWAYS two elements
  //! the ONLY WAY TO CORRECTLY UPDATE the state variable is by using the state function
  // const [isDarkMode, setIsDarkMode] = useState(true);

  //! LOCAL NON-STATE VARIABLES DO NOT CAUSE RE-RENDERS
  // let count = 0

  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <header className={props.isDarkMode ? "header-dark" : "header-light"}>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/projects/new" className={({isActive}) => isActive ? "active" : ""}>Create Project</NavLink>
      <button onClick={props.toggleDarkMode}>
        {props.isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;