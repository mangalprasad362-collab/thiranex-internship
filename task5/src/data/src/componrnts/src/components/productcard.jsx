import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </Link>

      <div className="product-content">
        <small>{product.category}</small>

        <h3>{product.name}</h3>

        <div className="rating">
          <Star size={16} fill="currentColor" />
          {product.rating}
        </div>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}