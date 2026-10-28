
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Services", path: "/services" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="pipe-navbar">
      <div className="navbar-inner container">
        <Link to="/" className="pipe-logo" onClick={closeMenu}>
          <span className="logo-mark">
            <i className="bi bi-tools"></i>
          </span>
          <span>
            PIPE<span className="logo-highlight">PRO</span>
            <small>PLUMBING SUPPLIES</small>
          </span>
        </Link>

        <button
          className="custom-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/cart"
            className="cart-nav"
            onClick={closeMenu}
          >
            <i className="bi bi-cart3"></i> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
