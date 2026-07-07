// Custom hook — fetches products with filters & pagination
import { useState, useEffect, useCallback } from "react";

const BASE_URL = "/api/products";

export const useProducts = () => {
  const [products, setProducts]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [total, setTotal]         = useState(0);
  const [pages, setPages]         = useState(1);

  // Filters state
  const [search, setSearch]       = useState("");
  const [category, setCategory]   = useState("");
  const [minPrice, setMinPrice]   = useState("");
  const [maxPrice, setMaxPrice]   = useState("");
  const [page, setPage]           = useState(1);
  const limit                     = 12;

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search)   params.set("search",   search);
      if (category) params.set("category", category);
      if (minPrice) params.set("minPrice", minPrice);
      if (maxPrice) params.set("maxPrice", maxPrice);
      params.set("page",  page);
      params.set("limit", limit);

      const res  = await fetch(`${BASE_URL}?${params}`);
      const data = await res.json();

      setProducts(data.data   || []);
      setTotal(data.total     || 0);
      setPages(data.pages     || 1);
    } catch (err) {
      console.error("Fetch error:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [search, category, minPrice, maxPrice, page]);

  // Debounce search/price inputs (500ms)
  useEffect(() => {
    const id = setTimeout(() => fetchProducts(), 500);
    return () => clearTimeout(id);
  }, [fetchProducts]);

  // Reset to page 1 when filters change
  useEffect(() => { setPage(1); }, [search, category, minPrice, maxPrice]);

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setPage(1);
  };

  return {
    products, loading, total, pages, page,
    search, category, minPrice, maxPrice,
    setSearch, setCategory, setMinPrice, setMaxPrice, setPage,
    resetFilters,
  };
};
