import { useState } from "react";
import getImage from "./getImage";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Contact PipePro</h1>
          <p>Send us your product enquiry or bulk supply requirements.</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <div className="contact-details" data-aos="fade-right">
              <h2>Let's Discuss Your Project</h2>
              <p>
                Use the enquiry form to ask about products, prices
                or supply requirements.
              </p>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <div><strong>Phone</strong><span>+91 11111 00000</span></div>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <div><strong>Email</strong><span>sales@pipepro.example</span></div>
              </div>

              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <div><strong>Location</strong><span>Your shop address here</span></div>
              </div>

              <img
                src={getImage("shop-counter.jpg")}
                alt="Plumbing supplies shop"
                className="contact-image"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
              <h2>Send an Enquiry</h2>

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="customerName">Full Name</label>
                  <input id="customerName" className="form-control" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="customerEmail">Email Address</label>
                  <input id="customerEmail" type="email" className="form-control" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="customerPhone">Phone Number</label>
                  <input id="customerPhone" type="tel" className="form-control" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="enquiryType">Enquiry Type</label>
                  <select id="enquiryType" className="form-select">
                    <option>Product Enquiry</option>
                    <option>Bulk Order</option>
                    <option>Price Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="customerMessage">Your Message</label>
                  <textarea id="customerMessage" className="form-control" rows="5" required></textarea>
                </div>

                <div className="col-12">
                  <button className="primary-button" type="submit">
                    Submit Enquiry <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>

              {submitted && (
                <p className="form-success">
                  Your demo form has been submitted successfully.
                  Connect a backend to receive enquiries.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;