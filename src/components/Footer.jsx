
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pipe-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="pipe-logo footer-logo">
              <span className="logo-mark">
                <i className="bi bi-tools"></i>
              </span>
              <span>
                PIPE<span className="logo-highlight">PRO</span>
                <small>PLUMBING SUPPLIES</small>
              </span>
            </Link>

            <p>
              Plumbing materials, fittings and professional tools
              for your everyday project requirements.
            </p>

            <div className="social-links">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/deals">Deals</Link>
          </div>

          <div className="footer-column">
            <h3>Information</h3>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <p><i className="bi bi-telephone"></i> +91 11111 00000</p>
            <p><i className="bi bi-envelope"></i> sales@pipepro.example</p>
            <p><i className="bi bi-geo-alt"></i> Your shop address here</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PipePro Plumbing Supplies.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
