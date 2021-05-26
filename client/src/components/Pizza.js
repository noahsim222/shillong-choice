import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Pizza.css";

export default function Pizza({ pizza }) {
  AOS.init({});
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  //To close and open the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // object of the dispatch
  const dispatch = useDispatch();

  // Add to cart function
  function addtocart() {
    // dispatch the cart to the component
    dispatch(addToCart(pizza, quantity, varient));
  }
  return (
    <div
      data-aos="zoom-in"
      style={{ margin: "40px 10px", marginTop: "10px" }}
      className="shadow-lg p-3  bg-white rounded main "
    >
      <div onClick={handleShow}>
        <h1 className="pizzaname">{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          alt=""
          style={{ height: "200px", width: "200px", objectFit: "cover" }}
        />
      </div>

      <div className="flex-container">
        <div className="varients  w-100 m-1">
          <p>Varients</p>
          <select
            className="form-select "
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient, index) => {
              return (
                <option key={index} value={varient}>
                  {varient}
                </option>
              );
            })}
          </select>
        </div>
        <div className="prices w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div
        className="flex-container info"
        style={{
          width: "100%",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="m-1 w-100">
          <h1 className="m-2" style={{ fontSize: ".9rem" }}>
            Price:{" "}
            <span style={{ fontSize: "1rem" }}>
              {pizza.prices[0][varient] * quantity}
            </span>{" "}
            Rs/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button
            className="btn"
            style={{ fontSize: ".8rem" }}
            onClick={addtocart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {/* Modal */}

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalbody">
          <img src={pizza.image} alt={pizza.name} className="img-fluid" />
          <p className="description">{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
