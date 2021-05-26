import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ordersscreen() {
  AOS.init();
  const dispatch = useDispatch();
  const ordersstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = ordersstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h1>Orders</h1>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                data-aos="fade-down"
                className="col-md-10 mt-3 mb-2"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h1>Items</h1>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} ={" "}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h1>Address</h1>
                    <hr />
                    <p>Street: {order.shippingAddress.street}</p>
                    <p>City: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                    <p>Pincode: {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h1>Order Info</h1>
                    <hr />
                    <p>Order Amount: {order.orderAmount}</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id: {order.transactionId}</p>
                    <p>Order Id: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
