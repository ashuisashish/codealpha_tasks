const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="🔍 Search books..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
);

export default SearchBar;
