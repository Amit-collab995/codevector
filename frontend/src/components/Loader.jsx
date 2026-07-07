const Loader = () => (
  <div className="products-grid">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="skeleton-card">
        <div className="skeleton skeleton-img" />
        <div className="skeleton-body">
          <div className="skeleton skeleton-line w-40" />
          <div className="skeleton skeleton-line w-70" />
          <div className="skeleton skeleton-line w-90" />
          <div className="skeleton skeleton-line w-55" />
        </div>
      </div>
    ))}
  </div>
);

export default Loader;
