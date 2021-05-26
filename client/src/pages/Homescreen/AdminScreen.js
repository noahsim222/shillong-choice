import React, { useEffect } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import AddNewPizza from "../../components/AddNewPizza";
import OrderList from "../../components/OrderList";
import PizzasList from "../../components/PizzasList";
import UsersList from "../../components/UsersList";
import "./AdminScreen.css";
import EditPizza from "./EditPizza";

export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userlist"}>Users List</Link>
            </li>
            <li>
              <Link to={"/admin/pizzaslist"}>Pizzas List</Link>
            </li>
            <li>
              <Link to={"/admin/addpizza"}>Add New Pizza</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders List</Link>
            </li>
          </ul>

          <Switch className="pl-0">
            <Route path="/admin" component={UsersList} exact />
            <Route path="/admin/userlist" component={UsersList} exact />
            <Route path="/admin/orderslist" component={OrderList} exact />
            <Route path="/admin/pizzaslist" component={PizzasList} exact />
            <Route path="/admin/addpizza" component={AddNewPizza} exact />
            <Route
              path="/admin/editpizza/:pizzaid"
              component={EditPizza}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
