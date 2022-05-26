import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h2 className="text-primary text-2xl font-bold text-center my-3 uppercase">
            Dashboard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            { !admin &&
              <>
                <li>
                  <Link to="orders">My Orders</Link>
                </li>
                <li>
                  <Link to="addReview">Add a Review</Link>
                </li>
              </>
            }
            {admin && (
              <>
                <li>
                  <Link to="makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="addParts">Add Parts</Link>
                </li>
                <li>
                  <Link to="manageParts">Manage Parts</Link>
                </li>
                <li>
                  <Link to="manageOrders">Manage All Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
