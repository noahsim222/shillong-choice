import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import "./RegisterScreen.css";

export default function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <h1 className="text-center m-2">Login</h1>

          <div>
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

            <button onClick={login} className="btn mt-3 mb-3">
              LOGIN
            </button>
            <br />
            <a style={{ color: "black" }} className="mt-2" href="/register">
              Click here to register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
