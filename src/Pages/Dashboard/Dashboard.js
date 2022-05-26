import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  // const [admin] = useAdmin(user);

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
          <h2 className="text-primary text-2xl font-bold text-center my-3 uppercase">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="addReview">Add a Review</Link>
            </li>
            <li>
              <Link to="profile">My Profile</Link>
            </li>
            {/* {admin && (
              <>
                <li>
                  <Link to="user">All Users</Link>
                </li>
                <li>
                  <Link to="addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="manageDoctor">Manage Doctors</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
