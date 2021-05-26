import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";
import "./Navbar.css";

export default function Navbar() {
  // Object of our cart reducer

  const cartState = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div className="nav_main">
      <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-2 bg-white rounded">
        <a className="navbar-brand" href="/">
          Shillong Choice
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i
              style={{
                color: "black",
              }}
              className="fa fa-bars fa-2x"
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto nav_main">
            {currentUser ? (
              <div className="dropdown">
                <a
                  className=" dropdown-toggle nav-link"
                  href="."
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="."
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart{" "}
                {cartState.cartItems.length > 0 ? (
                  <span className="cartLength">
                    {cartState.cartItems.length}
                  </span>
                ) : (
                  ""
                )}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
