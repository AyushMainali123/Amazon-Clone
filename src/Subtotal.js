import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
        displayType={"text"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
                <small className = "subtotal__gift">
              <input type="checkbox" /> <span> This order contains a gift</span>
            </small>
          </>
        )}
      />
      <button>Proceed to Format</button>
    </div>
  );
};

export default Subtotal;
