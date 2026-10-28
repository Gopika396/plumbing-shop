
import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./ProductData";

function Products() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">OUR STORE</span>
          <h1>All Products</h1>
          <p>Browse plumbing materials, fixtures and professional tools.</p>
        </div>

        <div className="product-toolbar">
          <input
            type="search"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span>{filtered.length} products found</span>
        </div>

        {cart.length > 0 && (
          <p className="cart-feedback">
            {cart.length} item(s) added to your cart during this visit.
          </p>
        )}

        <div className="row g-4">
          {filtered.map((product) => (
            <div className="col-sm-6 col-lg-4" key={product.id}>
              <ProductCard
                product={product}
                onAdd={(item) => setCart((old) => [...old, item])}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="empty-message">No matching products found.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
