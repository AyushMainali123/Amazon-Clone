import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating},
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
      </div>

      <img src={image} alt="Product Image" />
      <button
        onClick={addToBasket}
        disabled={basket.some((item) => item.id === id)}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
