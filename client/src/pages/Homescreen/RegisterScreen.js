import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userActions";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Success from "../../components/Success";

import "./RegisterScreen.css";

export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const dispatch = useDispatch();
  const { error, loading, success } = registerstate;

  function register() {
    if (password !== cpassword) {
      alert("Password does not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registerd Successufully " />}
          {error && <Error error="Email Already Registered" />}
          <h1 className="text-center m-2">Register</h1>
          <div>
            <input
              required
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a style={{ color: "black" }} href="/login">
              Click here to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
