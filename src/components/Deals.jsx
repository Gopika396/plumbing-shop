import { Link } from "react-router-dom";
import getImage from "./getImage";

function Deals() {
  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">VALUE FOR YOUR PROJECT</span>
          <h1>Special Deals</h1>
          <p>Explore supply bundles and request a quote for bulk purchases.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="deal-card" data-aos="fade-right">
              <img
                src={getImage("plumbing-tools.jpg")}
                alt="Plumbing tools"
              />
              <div className="deal-content">
                <span className="deal-label">TOOL BUNDLE</span>
                <h2>Essential Repair Kit</h2>
                <p>A practical selection of tools for routine plumbing work.</p>
                <Link to="/contact" className="primary-button">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="deal-card" data-aos="fade-left">
              <img
                src={getImage("pipe-fittings.jpg")}
                alt="Pipe fittings"
              />
              <div className="deal-content">
                <span className="deal-label">PROJECT BUNDLE</span>
                <h2>Fittings Supply Pack</h2>
                <p>Ask about suitable fittings for your next project.</p>
                <Link to="/contact" className="primary-button">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="deal-note">
          Bundle contents, pricing and availability must be confirmed with the store.
        </p>
      </div>
    </section>
  );
}

export default Deals;