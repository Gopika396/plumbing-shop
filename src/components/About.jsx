
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="section-padding">
        <div className="container about-grid">
          <div data-aos="fade-right">
            <img
              className="about-image"
              src="/src/assets/images/shop-counter.jpg"
              alt="Plumbing supplies showroom"
            />
          </div>

          <div className="about-content" data-aos="fade-left">
            <span className="eyebrow">ABOUT PIPEPRO</span>
            <h1>Supplies You Can Depend On</h1>
            <p>
              PipePro is a plumbing supply store concept built around
              quality materials, practical tools and convenient product
              discovery for homeowners and professionals.
            </p>
            <p>
              From pipes and valves to bathroom fixtures and repair
              accessories, our goal is to make finding project essentials
              simple and convenient.
            </p>

            <div className="about-points">
              <p><i className="bi bi-check-circle-fill"></i> A wide range of plumbing essentials</p>
              <p><i className="bi bi-check-circle-fill"></i> Products for different project needs</p>
              <p><i className="bi bi-check-circle-fill"></i> Enquiry support for bulk requirements</p>
            </div>

            <Link to="/products" className="primary-button">
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="container text-center" data-aos="fade-up">
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Reliable Products. Practical Solutions.</h2>
          <p>
            Helping customers find the right plumbing supplies for their needs.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
