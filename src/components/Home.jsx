import { Link } from "react-router-dom";
import { useState } from "react";
import products from "./ProductData";
import ProductCard from "./ProductCard";
import getImage from "./getImage";

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((old) => [...old, product]);
  };

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content" data-aos="fade-right">
            <span className="eyebrow">YOUR TRUSTED PLUMBING PARTNER</span>
            <h1>
              Every Pipe.
              <br />
              Every Fitting.
              <br />
              <span>One Reliable Store.</span>
            </h1>
            <p>
              Quality plumbing materials, professional tools and
              dependable supplies for homes, businesses and contractors.
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="primary-button">
                Explore Products <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/contact" className="outline-button">
                Get in Touch
              </Link>
            </div>

            <div className="hero-stats">
              <div><strong>500+</strong><span>Products</span></div>
              <div><strong>100%</strong><span>Quality Focus</span></div>
              <div><strong>Daily</strong><span>Supply Support</span></div>
            </div>
          </div>

          <div className="hero-image-wrap" data-aos="fade-left">
            <img
              src={getImage("plumbing-hero.jpg")}
              alt="Plumbing pipes and supplies"
              className="hero-image"
            />
            <div className="hero-image-label">
              <span>BUILT FOR EVERY PROJECT</span>
              <strong>Professional Plumbing Supplies</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-strip">
        <div className="container benefits-grid">
          <div><i className="bi bi-shield-check"></i><span>Quality Products</span></div>
          <div><i className="bi bi-box-seam"></i><span>Wide Product Range</span></div>
          <div><i className="bi bi-tools"></i><span>Professional Tools</span></div>
          <div><i className="bi bi-headset"></i><span>Helpful Support</span></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <div>
              <span className="eyebrow">SHOP OUR RANGE</span>
              <h2>Featured Products</h2>
              <p>Dependable supplies for your next plumbing project.</p>
            </div>
            <Link to="/products" className="text-link">
              View All Products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-4">
            {products.slice(0, 3).map((product) => (
              <div className="col-md-6 col-lg-4" key={product.id}>
                <ProductCard product={product} onAdd={addToCart} />
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <p className="cart-feedback">
              {cart.length} item(s) added during this visit.
              <Link to="/cart"> View cart</Link>
            </p>
          )}
        </div>
      </section>

      <section className="home-cta">
        <div className="container cta-inner" data-aos="fade-up">
          <div>
            <span className="eyebrow">FOR HOMEOWNERS AND CONTRACTORS</span>
            <h2>Planning your next project?</h2>
            <p>Find the materials you need in one convenient place.</p>
          </div>
          <Link to="/categories" className="primary-button">
            Browse Categories <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;