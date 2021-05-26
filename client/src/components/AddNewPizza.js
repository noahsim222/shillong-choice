import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function AddNewPizza() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [imageURL, setimageURL] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();

  const addpizzastate = useSelector((state) => state.addPizzasReducer);
  console.log(addpizzastate);
  const { success, error, loading } = addpizzastate;

  function formHandler(e) {
    e.preventDefault();

    const pizza = {
      name,
      imageURL,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    console.log(pizza);
    dispatch(addPizza(pizza));
  }
  return (
    <div>
      <div className="text-left">
        <h2>Add Pizza</h2>
        {loading && <Loading />}
        {error && <Error error="something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            placeholder="small varient price "
            value={smallprice}
            onChange={(e) => setsmallprice(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            placeholder="medium varient price "
            value={mediumprice}
            onChange={(e) => setmediumprice(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            placeholder="large varient price "
            value={largeprice}
            onChange={(e) => setlargeprice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category "
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />

          <input
            className="form-control"
            type="text"
            placeholder="image url "
            value={imageURL}
            onChange={(e) => setimageURL(e.target.value)}
          />
          <button className="btn m-3" type="submit">
            {" "}
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
