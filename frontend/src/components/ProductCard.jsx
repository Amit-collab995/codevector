const CATEGORY_EMOJI = {
  "Electronics":   "💻",
  "Clothing":      "👗",
  "Books":         "📚",
  "Home & Garden": "🏡",
  "Sports":        "⚽",
  "Toys":          "🧸",
  "Beauty":        "💄",
  "Automotive":    "🚗",
};

const getStockBadge = (stock) => {
  if (stock === 0)   return { label: "Out of Stock", cls: "out-stock" };
  if (stock <= 10)   return { label: `Low Stock (${stock})`, cls: "low-stock" };
  return               { label: "In Stock", cls: "in-stock" };
};

const ProductCard = ({ product }) => {
  const { name, description, price, category, stock, image } = product;
  const badge = getStockBadge(stock);

  return (
    <div className="product-card">
      {/* Image */}
      <div className="card-img-wrap">
        {image ? (
          <img
            className="card-img"
            src={image}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "grid";
            }}
          />
        ) : null}
        <div
          className="card-img-fallback"
          style={{ display: image ? "none" : "grid" }}
        >
          {CATEGORY_EMOJI[category] || "📦"}
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <p className="card-category">{category}</p>
        <h3 className="card-name">{name}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <span className="card-price">${Number(price).toFixed(2)}</span>
          <span className={`stock-badge ${badge.cls}`}>{badge.label}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
