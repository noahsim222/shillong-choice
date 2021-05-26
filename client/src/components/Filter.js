import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
  const dispatch = useDispatch();

  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");

  function filter() {
    dispatch(filterPizzas(searchkey, category));
    setsearchkey("");
  }

  return (
    <div className="container">
      <div
        className="row justify-content-center shadow-lg p-3  bg-white rounded main"
        style={{ display: "flex", height: "auto", marginBottom: "30px" }}
      >
        <div className="col-md-3">
          <input
            id="input"
            type="text"
            style={{ boxShadow: "none" }}
            className="form-control w-100"
            placeholder="search pizzas"
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
          />
        </div>
        <div className="col-md-3  ">
          <select
            style={{ boxShadow: "none" }}
            name=""
            id=""
            className="form-select w-100 mt-2"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-veg</option>
          </select>
        </div>
        <div className="col-md-3 ">
          <button
            style={{ display: "block" }}
            className="btn w-100 mt-2"
            onClick={filter}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
