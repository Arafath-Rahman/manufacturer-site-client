import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteModal, setDeleteModal] = useState(false);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleChange = (event, order) => {
    refetch();
    if (event.target.value === "shipped" && order.status === "pending") {
      const update = {
        status: "shipped",
      };

      fetch(`http://localhost:5000/order/${order._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            refetch();
            toast.success("Status Updated successfully.");
          }
        });
    } else if (event.target.value === "shipped" && order.status === "unpaid") {
      toast.error("Unpaid order can not be shipped.");
    }
  };

  //handle delete order
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

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Part Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{order?.userEmail}</td>
                  <td>{order?.partName}</td>
                  <td>{order?.orderQuantity}</td>
                  <td>{order?.totalPrice}</td>
                  <td>
                    <div>
                      <select
                        defaultValue={
                          order?.status === "unpaid"
                            ? "unpaid"
                            : `${
                                order?.status === "pending"
                                  ? "pending"
                                  : "shipped"
                              }`
                        }
                        className="select select-bordered select-sm max-w-xs"
                        onChange={(e) => handleChange(e, order)}
                      >
                        <option value="unpaid" className="text-red-500">
                          unpaid
                        </option>
                        <option value="pending" className="text-yellow-500">
                          pending
                        </option>
                        <option value="shipped" className="text-green-500">
                          shipped
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    {order?.status === "unpaid" && (
                      <>
                        <label
                          htmlFor="delete-order-modal"
                          onClick={() => setDeleteModal(true)}
                          className="btn btn-xs btn-error ml-1"
                        >
                          Cancel
                        </label>
                        {deleteModal && (
                          <DeleteModal
                            handleDelete={handleDelete}
                            order={order}
                            setDeleteModal={setDeleteModal}
                            refetch={refetch}
                          />
                        )}
                      </>
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

export default ManageOrders;
