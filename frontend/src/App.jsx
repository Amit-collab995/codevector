import "./index.css";
import Navbar      from "./components/Navbar.jsx";
import Filters     from "./components/Filters.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Pagination  from "./components/Pagination.jsx";
import Loader      from "./components/Loader.jsx";
import { useProducts } from "./hooks/useProducts.js";

const App = () => {
  const {
    products, loading, total, pages, page,
    search, category, minPrice, maxPrice,
    setSearch, setCategory, setMinPrice, setMaxPrice, setPage,
    resetFilters,
  } = useProducts();

  return (
    <div className="app-wrapper">
      {/* Ambient orb background */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navbar */}
      <Navbar total={total} />

      <main className="main-content">

        {/* Page header */}
        <div className="page-header">
          <h1>Product Catalogue</h1>
          <p>Discover, filter and explore our entire collection.</p>
        </div>

        {/* Filters */}
        <Filters
          search={search}       setSearch={setSearch}
          category={category}   setCategory={setCategory}
          minPrice={minPrice}   setMinPrice={setMinPrice}
          maxPrice={maxPrice}   setMaxPrice={setMaxPrice}
          onReset={resetFilters}
        />

        {/* Results meta */}
        {!loading && (
          <div className="results-meta">
            <span>
              Showing <b>{products.length}</b> of <b>{total.toLocaleString()}</b> products
            </span>
            <span>Page {page} of {pages}</span>
          </div>
        )}

        {/* Content */}
        {loading ? (
          <Loader />
        ) : products.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🔭</span>
            <h3>Nothing found</h3>
            <p>Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && products.length > 0 && (
          <Pagination page={page} pages={pages} onPageChange={setPage} />
        )}

      </main>
    </div>
  );
};

export default App;
