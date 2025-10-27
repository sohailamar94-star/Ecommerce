import React from "react";
import "./styles.css";

const SAMPLE_PRODUCTS = [
  {
    id: "a1",
    category: "Beauty",
    name: "Golden Pearl Cream",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1618477461855-9e7e7df0a07f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "a2",
    category: "Arduino",
    name: "DHT22 Sensor",
    price: 6.5,
    image:
      "https://images.unsplash.com/photo-1581090467999-6b61c93ed6ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "a3",
    category: "Electronics",
    name: "Wireless Earbuds",
    price: 18.75,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155222f9c2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "a4",
    category: "Beauty",
    name: "Lipstick Red",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1587080265308-68e9f76b9cd4?auto=format&fit=crop&w=500&q=80",
  },
];

function saveCart(cart) {
  localStorage.setItem("techbeauty_cart_v1", JSON.stringify(cart));
}

function loadCart() {
  try {
    const raw = localStorage.getItem("techbeauty_cart_v1");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default function App() {
  const [cart, setCart] = React.useState(loadCart());

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    saveCart(newCart);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🛍️ TechBeauty Store</h1>
        <p>Beauty • Electronics • Arduino</p>
      </header>

      <div className="product-grid">
        {SAMPLE_PRODUCTS.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="category">{p.category}</p>
            <p className="price">${p.price.toFixed(2)}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>🖤 Made with Love — TechBeauty © 2025</p>
      </footer>
    </div>
  );
}
