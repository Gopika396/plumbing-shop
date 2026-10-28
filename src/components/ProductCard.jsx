import { useState } from "react";
import getImage from "./getImage";

function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card" data-aos="fade-up">
      <div className="product-image">
        <img
          src={getImage(product.image)}
          alt={product.name}
        />
        <span className="product-category">{product.category}</span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <button className="add-button" onClick={handleAdd}>
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;