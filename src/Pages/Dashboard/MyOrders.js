import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  // const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  //deleteing an order with modal
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = (orderId) => {
    fetch(`http://localhost:5000/order/${orderId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          toast.success(`Order Cancelled successfully`);
          refetch();
        }
      });
  };

  //getting all orders of an user by email
  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         console.log("res-->", res);
  //         if (res.status === 401 || res.status === 403) {
  //           signOut(auth);
  //           localStorage.removeItem("accessToken");
  //           navigate("/");
  //         }
  //         return res.json();
  //       })
  //   }
  // }, [user, navigate]);

  // if (loading || orders.length === 0) {
  //   return <Loading />;
  // }


  //------------------------------
  //------------------------------
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("userOrders", () =>
  fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
  .then((res) => {
    console.log("res-->", res);
    if (res.status === 401 || res.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      navigate("/");
    }
    return res.json();
  }));

  if (loading || isLoading) {
    return <Loading />;
  }
  //------------------------------
  //------------------------------
  


  return (
    <div>
      <h2>My orders: {orders?.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Part</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.partName}</td>
                  <td>{order.orderQuantity}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.totalPrice && !order.paid && (
                      <div>
                        <Link
                          to={`/dashboard/order/${order._id}`}
                          className="btn btn-xs btn-success"
                        >
                          Pay
                        </Link>
                        <label
                          htmlFor="delete-order-modal"
                          onClick={() => setDeleteModal(true)}
                          className="btn btn-xs btn-error ml-1"
                        >
                          Cancel
                        </label>
                      </div>
                    )}
                    {
                      deleteModal && <DeleteModal handleDelete={handleDelete} order={order} setDeleteModal={setDeleteModal} />
                    }
                    {order.totalPrice && order.paid && (
                      <div>
                        <p className="font-bold text-green-500">Paid</p>
                        <p className="font-bold text-orange-500">Transaction ID: {order.transactionId}</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
