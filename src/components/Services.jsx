
import { Link } from "react-router-dom";

const services = [
  {
    icon: "bi-box-seam",
    title: "Bulk Supply",
    text: "Supply options for contractors, builders and larger projects."
  },
  {
    icon: "bi-tools",
    title: "Product Guidance",
    text: "Help choosing suitable pipes, fittings and installation tools."
  },
  {
    icon: "bi-house-gear",
    title: "Project Essentials",
    text: "Find plumbing materials for residential and commercial work."
  },
  {
    icon: "bi-chat-square-text",
    title: "Enquiry Support",
    text: "Ask about products, availability and supply requirements."
  }
];

function Services() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">HOW WE HELP</span>
          <h1>Our Services</h1>
          <p>Practical supply support for projects of different sizes.</p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6" key={service.title}>
              <div className="service-card" data-aos="fade-up">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to="/contact" className="text-link">
                  Make an Enquiry <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
