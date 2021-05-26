import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../actions/cartActions";
import "./CartScreen.css";
import { motion } from "framer-motion";
import Checkout from "../../components/Checkout";

export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div className="cartdivmain">
      <div className="row justify-content-center">
        <div className="col-md-6 cartitems " style={{ marginBottom: "30px" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              marginTop: "20px",
              letterSpacing: "5px",
            }}
          >
            My Cart
            <hr
              style={{
                height: "3px",
                width: "100%",
                backgroundColor: "red",
                borderRadius: "10px",
              }}
            />
          </h1>

          {cartItems.map((item) => {
            return (
              <motion.div
                key={item._id}
                className="flex-container"
                transition="spring"
                layout
                damping="25"
                stiffness="120"
              >
                <div className="text-left m-1 w-100">
                  <h1 style={{ fontSize: "1.5rem" }}>
                    {item.name}{" "}
                    <span style={{ fontSize: ".5rem" }}>[{item.varient}]</span>
                  </h1>
                  <h1 style={{ fontSize: "1rem" }}>
                    Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline", fontSize: "1rem" }}>
                    Quantity:
                  </h1>
                  <i
                    className="fa fa-plus "
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-1 w-110">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: "80px", width: "80px", marginTop: "8px" }}
                  />
                </div>
                <div className="m-1 ">
                  <i
                    className="fa fa-trash mt-5 "
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="col-md-4  checkout">
          <h1 style={{ fontSize: ".7rem", letterSpacing: "2px" }}>
            CART TOTAL :
            <span style={{ fontSize: "1.2rem" }}> {subtotal} /Rs- </span>
          </h1>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
