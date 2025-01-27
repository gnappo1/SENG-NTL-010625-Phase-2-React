import "./Header.css"

const Header = ({ propName }) => {
  //! props are ALWAYS passed down as an object
  //! Destructuring is the idea of quickly extracting data out of an object or array and create variables for the info passed

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        {propName}
      </h1>
      <button>Dark Mode</button>
    </header>
  );
};

// export {Header}; //! as named exports, multiple equally important exports
export default Header; //! as default, aka the main export of this file