import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CartScreen.css";

export default function CartScreen() {
  AOS.init({});
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  console.log(cartItems);
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div className="main_container">
      <h1>My Cart</h1>

      {cartItems.map((items) => {
        return (
          <div className="cartItems" data-aos="fade-down">
            <img src={items.image} alt={items.name} />
            <div className="info">
              <h6>{items.name}</h6>
              <span>{items.varient}</span>
              <span>{items.category}</span>
            </div>
            <div className="priceinfo">
              <h6>{items.prices[0][items.varient]} ₹</h6>
            </div>
            <div className="quantity">
              <i
                className="fa fa-minus fa-xs"
                onClick={() => {
                  dispatch(addToCart(items, items.quantity - 1, items.varient));
                }}
              ></i>
              <h6>{items.quantity}</h6>
              <i
                className="fa fa-plus fa-xs"
                onClick={() => {
                  dispatch(addToCart(items, items.quantity + 1, items.varient));
                }}
              ></i>
            </div>
            <div className="subtotal">
              <h6>{items.price} ₹</h6>
            </div>
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => {
                dispatch(deleteFromCart(items));
              }}
            ></i>
          </div>
        );
      })}

      <div className="payment">
        <div className="mode">
          <h6>Choose payment mode:</h6>
          <p>Cash on Dilivery</p>
          <p>Online Payment</p>
        </div>
        <div className="paymentmode">
          <div className="info_payment">
            <div className="div">
              <p>SUBTOTAL</p>

              <p>SHIPPING</p>

              <p>TOTAL</p>
            </div>
            <div className="div">
              <p> {subtotal}₹</p>

              <p>Free</p>

              <p> {subtotal}₹</p>
            </div>
          </div>
          <Checkout subtotal={subtotal} />
          {/* <button className="btn">
            Checkout <span>{subtotal}₹</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
