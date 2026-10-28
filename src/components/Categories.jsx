
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Pipes",
    image: "pvc-pipes.jpg",
    description: "PVC and drainage pipes for water systems."
  },
  {
    name: "Valves",
    image: "brass-valve.jpg",
    description: "Flow-control valves and plumbing connections."
  },
  {
    name: "Fittings",
    image: "pipe-fittings.jpg",
    description: "Connectors, elbows, joints and adapters."
  },
  {
    name: "Tools",
    image: "plumbing-tools.jpg",
    description: "Practical tools for installation and repair."
  },
  {
    name: "Bathroom Fixtures",
    image: "bathroom-fixtures.jpg",
    description: "Bathroom taps, showers and fixtures."
  },
  {
    name: "Accessories",
    image: "seal-tape.jpg",
    description: "Sealing materials and everyday essentials."
  }
];

function Categories() {
  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">FIND WHAT YOU NEED</span>
          <h1>Shop by Category</h1>
          <p>Explore our essential plumbing supply categories.</p>
        </div>

        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-md-6 col-lg-4" key={category.name}>
              <div className="category-card" data-aos="fade-up">
                <img
                  src={`/src/assets/images/${category.image}`}
                  alt={category.name}
                />
                <div className="category-card-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <Link to="/products" className="text-link">
                    Explore Products <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
