import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
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
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);

  if (loading || orders.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <h2>My orders: {orders.length}</h2>
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
                    {(order.totalPrice && !order.paid) && (
                      <Link
                        to={`/dashboard/payment/${order._id}`}
                        className="btn btn-xs btn-success"
                      >
                        Pay
                      </Link>
                    )}
                    {(order.price && order.paid) && (
                      <div>
                      <p
                        className="font-bold text-green-500"
                      >
                        Paid
                      </p>
                      <p>Transaction ID: {order.transactionId}</p>
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