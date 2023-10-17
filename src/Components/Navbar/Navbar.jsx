import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isButtonOn, setIsButtonOn] = useState(true);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#D72323] px-3 py-2 rounded text-white"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#D72323] px-3 py-2 rounded text-white"
              : isPending
              ? "pending"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#D72323] px-3 py-2 rounded text-white"
              : isPending
              ? "pending"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="pt-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#D72323]"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#D72323] hover:text-[#9c1b1b]"
            >
              {links}
            </ul>
          </div>
          <img src={logo} className="w-[300px]"></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-6 text-[#D72323]">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/131-512.png"
              className="w-10"
            />
            <Link>
              <button className="bg-[#D72323] hover:bg-[#ac1919] px-4 py-3 rounded-lg text-white">
                Sign In
              </button>
            </Link>
            <button onClick={() => setIsButtonOn(!isButtonOn)}>
              {isButtonOn ? (
                <div className="text-3xl">
                  <MdDarkMode />
                </div>
              ) : (
                <div className="text-3xl">
                  <CiLight />
                </div>
              )}
            </button>
          </div>

          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
