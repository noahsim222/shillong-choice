import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "./Error";
import Loading from "./Loading";

export default function OrderList() {
  const allorders = useSelector((state) => state.getAllOrdersReducer);
  const { error, loading, orders } = allorders;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div className="">
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-striped table-bordered table-responsive-sm ">
        <thead className="thead-dark">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <p>Delivered</p>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => dispatch(deliverOrder(order._id))}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
