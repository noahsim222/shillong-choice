import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, editPizza, getPizzaById } from "../../actions/pizzaActions";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Success from "../../components/Success";

export default function EditPizza({ match }) {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [imageURL, setimageURL] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();
  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);

  const { pizza, error, loading } = getpizzabyidstate;
  const editpizzastate = useSelector((state) => state.editPizzasReducer);
  const { editloading, editerror, editsuccess } = editpizzastate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setname(pizza.name);
        setdescription(pizza.description);
        setcategory(pizza.category);
        setsmallprice(pizza.prices[0]["small"]);
        setmediumprice(pizza.prices[0]["medium"]);
        setlargeprice(pizza.prices[0]["large"]);
        setimageURL(pizza.image);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedpizza = {
      _id: match.params.pizzaid,
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
    dispatch(editPizza(editedpizza));
  }
  return (
    <div>
      <h1>Edit Pizza</h1>

      <div className="text-left">
        {loading && <Loading />}
        {error && <Error error="something went wrong" />}

        {editsuccess && <Success success="Pizza Updated Successfully" />}
        {editloading && <Loading />}

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
            Update Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
