import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const ManageOrders = () => {
  const [user] = useAuthState(auth);
  let count = 0;

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
    }
    else if(event.target.value === "shipped" && order.status === "unpaid"){
      toast.error("Unpaid order can not be shipped.");
    }
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{order?.userEmail}</td>
                  <td>{order?.partName}</td>
                  <td>{order?.orderQuantity}</td>
                  <td>
                    <div>
                      <select
                        defaultValue={order?.status === "unpaid" ? "unpaid" : `${order?.status === "pending" ? "pending" : "shipped"}` }
                        className="select select-bordered select-sm w-full max-w-xs"
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
