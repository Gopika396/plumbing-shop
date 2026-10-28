
const reviews = [
  {
    name: "Arun Kumar",
    role: "Homeowner",
    text: "The product layout makes it easy to find the plumbing supplies I need."
  },
  {
    name: "Suresh M",
    role: "Plumbing Contractor",
    text: "A useful range of tools and fittings for regular plumbing projects."
  },
  {
    name: "Priya R",
    role: "Home Renovation",
    text: "The category layout is clear and the enquiry section is convenient."
  }
];

function Reviews() {
  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">CUSTOMER FEEDBACK</span>
          <h1>What Customers Say</h1>
          <p>Example review cards for your website design.</p>
        </div>

        <div className="row g-4">
          {reviews.map((review) => (
            <div className="col-md-6 col-lg-4" key={review.name}>
              <div className="review-card" data-aos="fade-up">
                <div className="review-stars" aria-label="Five stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-person">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="deal-note">
          These are sample reviews for the design. Replace them with genuine
          customer feedback before publishing.
        </p>
      </div>
    </section>
  );
}

export default Reviews;
