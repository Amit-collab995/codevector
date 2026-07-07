const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Toys",
  "Beauty",
  "Automotive",
];

const Filters = ({
  search, setSearch,
  category, setCategory,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  onReset,
}) => {
  return (
    <div className="filters-bar">
      {/* Search */}
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Search products…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category */}
      <select
        id="category-select"
        className="filter-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Price Range */}
      <div className="price-wrap">
        <input
          id="min-price"
          type="number"
          className="price-input"
          placeholder="Min ₹"
          min="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span className="price-sep">–</span>
        <input
          id="max-price"
          type="number"
          className="price-input"
          placeholder="Max ₹"
          min="0"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Reset */}
      <button id="reset-btn" className="btn-reset" onClick={onReset}>
        ✕ Reset
      </button>
    </div>
  );
};

export default Filters;
