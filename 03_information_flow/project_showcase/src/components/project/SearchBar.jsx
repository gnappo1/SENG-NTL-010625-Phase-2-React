const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return <input type="text" placeholder="Search..." onChange={handleSearch} />;
};

export default SearchBar;
