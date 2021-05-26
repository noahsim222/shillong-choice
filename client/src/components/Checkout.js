import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { deleteFromCart } from "../actions/cartActions";
import { placeOrder } from "../actions/orderActions";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";
import "./Checkout.css";

export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandaler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const { loading, error, success } = orderstate;

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Order placed successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandaler}
        currency="INR"
        stripeKey="pk_test_51IrF8cSBYec2kYOi8d3YDgcTHfF6Ywa8rLYUmjei1cROaGHdWGIEixFazOcRJpumw6jdltQn4ljpsI9n6Q3a2PY700lZjAllZa"
      >
        <button className="btnn">
          Checkout{"  "}
          <span>{subtotal}₹</span>
        </button>
      </StripeCheckout>
    </div>
  );
}
