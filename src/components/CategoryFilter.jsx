const CategoryFilter = ({ category, setCategory, categories }) => (
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
  >
    <option value="">All Categories</option>
    {categories.map((cat, idx) => (
      <option key={idx} value={cat}>{cat}</option>
    ))}
  </select>
);

export default CategoryFilter;
