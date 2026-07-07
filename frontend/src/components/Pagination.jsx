const Pagination = ({ page, pages, onPageChange }) => {
  if (pages <= 1) return null;

  // Build page number array with ellipsis
  const getPages = () => {
    const range = [];
    const delta = 2;
    const left  = page - delta;
    const right = page + delta;

    for (let i = 1; i <= pages; i++) {
      if (i === 1 || i === pages || (i >= left && i <= right)) {
        range.push(i);
      }
    }

    const withDots = [];
    let prev = null;
    for (const p of range) {
      if (prev && p - prev > 1) withDots.push("…");
      withDots.push(p);
      prev = p;
    }
    return withDots;
  };

  return (
    <div className="pagination">
      <button
        id="prev-page"
        className="page-btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ‹
      </button>

      {getPages().map((p, i) =>
        p === "…" ? (
          <span key={`dots-${i}`} className="page-dots">…</span>
        ) : (
          <button
            key={p}
            id={`page-${p}`}
            className={`page-btn ${p === page ? "active" : ""}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        )
      )}

      <button
        id="next-page"
        className="page-btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page === pages}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
