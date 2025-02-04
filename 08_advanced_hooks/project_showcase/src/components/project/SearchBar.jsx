const SearchBar = ({ handleSearch, searchQuery }) => {
  return <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />;
};

export default SearchBar;
