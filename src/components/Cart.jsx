
import { useState } from "react";
import products from "./ProductData";

function Cart() {
  const [items, setItems] = useState([]);

  const addItem = (product) => setItems((old) => [...old, product]);

  const removeItem = (index) => {
    setItems((old) => old.filter((_, i) => i !== index));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">YOUR SELECTION</span>
          <h1>Shopping Cart</h1>
          <p>Review your selected plumbing supplies.</p>
        </div>

        <div className="cart-layout">
          <div className="cart-panel">
            {items.length === 0 ? (
              <div className="empty-cart">
                <i className="bi bi-cart3"></i>
                <h3>Your cart is empty</h3>
                <p>Add products below to see them in your cart.</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div className="cart-row" key={`${item.id}-${index}`}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price.toLocaleString("en-IN")}</p>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}

            <div className="cart-total">
              <span>Total</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>
          </div>

          <div className="cart-panel">
            <h2>Add Products</h2>
            {products.map((product) => (
              <div className="cart-product-option" key={product.id}>
                <span>{product.name}</span>
                <button onClick={() => addItem(product)}>Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
