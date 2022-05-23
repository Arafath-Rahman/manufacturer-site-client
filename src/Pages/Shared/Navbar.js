import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = ["Home", "Parts", "Reviews", "Login"];
  return (
    <div className="lg:px-12">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems.map((item) => (
                <li key={item}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div class="avatar">
            <div className="w-12 mr-2 rounded-xl">
              <img
                src="https://i.ibb.co/vBbfXwT/logo-white-bg.png"
                alt="navbar avatar"
              />
            </div>
          </div>
          <Link to="/" className="uppercase text-sm md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
            Robotics Parts Store
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu-horizontal p-0">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link to="" className="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary uppercase mr-5">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="avatar"
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
