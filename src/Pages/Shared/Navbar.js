import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { NameContext } from "../../App";
import auth from "../../firebase.init";
import useUserInfo from "../../hooks/useUserInfo";
import Loading from "./Loading";

const Navbar = () => {
  const menuItems = ["Home", "Parts", "Reviews"];
  const [user, loading] = useAuthState(auth);
  const [userName] = useContext(NameContext);
  const [userInfo]  = useUserInfo(user?.email);
  
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  if(loading){
    return <Loading />;
  }

  console.log(userInfo);
  
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
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLocaleLowerCase()}`}
                    className="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary uppercase mr-5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {!user?.email&& (
                <li>
                  <Link
                    to="/login"
                    className="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary uppercase mr-5"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="avatar">
            <div className="w-12 mr-2 rounded-xl">
              <img
                src="https://i.ibb.co/vBbfXwT/logo-white-bg.png"
                alt="navbar logo"
              />
            </div>
          </div>
          <Link
            to="/"
            className="uppercase text-sm md:text-xl text-slate-800 font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-primary"
          >
            Robotics Parts Store
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu-horizontal p-0">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLocaleLowerCase()}`}
                    className="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary uppercase mr-5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {!user?.email && (
                <li>
                  <Link
                    to="/login"
                    className="font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary uppercase mr-5"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {user?.email && (
            <div className="dropdown dropdown-end flex items-center">
              <span className="text-secondary font-bold mr-1" title={userName === 'user' ? userInfo?.name : userName}>
                {userName === 'user' ? (userInfo?.name?.length > 10 ? userInfo?.name?.slice(0, 10) + "..." : userInfo?.name) : (userName.length > 10 ? userName?.slice(0, 10) + "..." : userName)}
              </span>
              {user?.photoURL ? (
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="user" />
                  </div>
                </label>
              ) : (
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar placeholder">
                  <div className="w-10 bg-neutral-focus text-neutral-content rounded-full">
                    {user?.email && <span>{userName === 'user' ? userInfo?.name?.charAt(0) : userName?.charAt(0) }</span>}
                  </div>
                </label>
              )}
              <ul
                tabIndex="0"
                className="mt-48 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="" className="justify-between">Profile</Link>
                </li>
                <li>
                  <Link to="" >Settings</Link>
                </li>
                {user?.email && (
                  <li>
                    <button
                      onClick={() => logOut()}
                      className="btn btn-outline btn-secondary btn-sm"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
