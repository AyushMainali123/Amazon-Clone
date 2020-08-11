import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">⭐️</span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
