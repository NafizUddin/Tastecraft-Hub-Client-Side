import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MyContext } from "../../Main Layout/MainLayout";
import useAuth from "../../Custom Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { isButtonOn, setIsButtonOn } = useContext(MyContext);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("userId");
        Swal.fire("Success!", "You have logged out successfully!", "success");
      })
      .catch((error) => console.log(error.code));
  };

  const handleToggle = () => {
    setIsButtonOn((prevState) => !prevState);
    if (isButtonOn) {
      document.body.style.backgroundColor = "#0e2433";
      //   #0a0f18
    } else {
      document.body.style.backgroundColor = "white";
    }
  };

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
          to="/addItems"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#D72323] px-3 py-2 rounded text-white"
              : isPending
              ? "pending"
              : ""
          }
        >
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myCart/${localStorage?.getItem("userId")}`}
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
      {/* style={{ backgroundColor: isButtonOn ? "white" : "#0a0f18" }} */}
      <div className="navbar">
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
          <img src={logo} className="hidden md:block w-[300px]"></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-6 text-[#D72323] font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    style={{
                      backgroundColor: isButtonOn ? "white" : "#ff8080",
                    }}
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52"
                  >
                    <li>
                      <a className="text-lg font-medium hover:bg-[#D72323] hover:text-white">
                        {user.displayName}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleLogOut}
                        className="text-lg font-medium hover:bg-[#D72323] hover:text-white"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                <button onClick={handleToggle}>
                  {isButtonOn ? (
                    <div className="text-3xl text-[#D72323]">
                      <MdDarkMode />
                    </div>
                  ) : (
                    <div className="text-4xl text-[#D72323]">
                      <CiLight />
                    </div>
                  )}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/131-512.png"
                  className="w-10"
                />
                <Link to="/login">
                  <button className="bg-[#D72323] hover:bg-[#ac1919] px-4 py-3 rounded-lg text-white">
                    Sign In
                  </button>
                </Link>
                <button onClick={handleToggle}>
                  {isButtonOn ? (
                    <div className="text-3xl text-[#D72323]">
                      <MdDarkMode />
                    </div>
                  ) : (
                    <div className="text-4xl text-[#D72323]">
                      <CiLight />
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
