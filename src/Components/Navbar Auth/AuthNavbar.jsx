import { Link } from "react-router-dom";
import redLogo from "../../assets/logo.png";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../Main Layout/MainLayout";

const AuthNavbar = () => {
  const { isButtonOn, setIsButtonOn } = useContext(MyContext);
  const handleToggle = () => {
    setIsButtonOn((prevState) => !prevState);
    if (isButtonOn) {
      document.body.style.backgroundColor = "#0e2433";
      //   #0a0f18
    } else {
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-7 py-5 md:py-2">
      <div>
        <img src={redLogo} className="w-[300px]"></img>
      </div>
      <div className="flex items-center justify-center gap-4 text-[#D72323] list-none pt-4 md:pt-0 text-lg font-semibold">
        <Link to="/">
          <li className="hover:bg-[#D72323] hover:text-white px-3 py-2 rounded">
            Home
          </li>
        </Link>
        <Link to="/addItems">
          <li className="hover:bg-[#D72323] hover:text-white px-3 py-2 rounded">
            Add Items
          </li>
        </Link>
        <Link to="/myCart">
          <li className="hover:bg-[#D72323] hover:text-white px-3 py-2 rounded">
            My Cart
          </li>
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
    </div>
  );
};

export default AuthNavbar;
