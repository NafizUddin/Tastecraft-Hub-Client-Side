import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MyContext } from "../../Main Layout/MainLayout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Custom Hooks/useAuth";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passValidation, setPassValidation] = useState(0);
  const { createUser, updateUserProfile } = useAuth();
  const { isButtonOn } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const termsAccepted = form.get("terms");
    setPassValidation(0);

    if (password.length < 6) {
      setPassValidation(1);
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~]).*$/.test(
        password
      )
    ) {
      setPassValidation(2);
      return;
    } else if (!termsAccepted) {
      Swal.fire("Oopss", "Please Accept our terms and conditions", "warning");
      return;
    }

    createUser(email, password)
      .then((res) => {
        localStorage.setItem("userId", res.user.uid);
        updateUserProfile(name, photoURL).then(() => {
          const user = { name, email, firebaseId: res.user.uid };

          fetch("https://tastecraft-hub-server-side.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire(
                "Success!",
                "You have registered your account successfully!",
                "success"
              );
              navigate(location?.state ? location.state : "/");
            });
        });
      })
      .catch((error) => {
        const errorCode = error.code.split("auth/")[1];
        Swal.fire("Ooppss!", `${errorCode}`, "error");
      });
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            style={{ color: isButtonOn ? "#D72323" : "white" }}
            className="text-3xl font-semibold leading-tight tracking-tight border-b pt-4 pb-6"
          >
            Create account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                htmlFor="name"
                className="block mb-2 text-lg font-semibold"
              >
                Your Name
              </label>
              <input
                style={{
                  backgroundColor: isButtonOn ? "white" : "#455A64",
                  color: isButtonOn ? "black" : "white",
                }}
                type="text"
                name="name"
                className="border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                htmlFor="photo"
                className="block mb-2 text-lg font-semibold"
              >
                Photo URL
              </label>
              <input
                style={{
                  backgroundColor: isButtonOn ? "white" : "#455A64",
                  color: isButtonOn ? "black" : "white",
                }}
                type="text"
                name="photo"
                className="border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5"
                placeholder="Enter Photo URL"
                required
              />
            </div>
            <div>
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                htmlFor="email"
                className="block mb-2 text-lg font-semibold"
              >
                Email Address
              </label>
              <input
                style={{
                  backgroundColor: isButtonOn ? "white" : "#455A64",
                  color: isButtonOn ? "black" : "white",
                }}
                type="email"
                name="email"
                className="border border-gray-300 sm:text-sm rounded-lg  block w-full p-3"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                htmlFor="password"
                className="block mb-2 text-lg font-semibold"
              >
                Password
              </label>
              <div className="relative">
                <input
                  style={{
                    backgroundColor: isButtonOn ? "white" : "#455A64",
                    color: isButtonOn ? "black" : "white",
                  }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id=""
                  className="border border-gray-300 sm:text-sm rounded-lg  block w-full p-3"
                  placeholder="••••••••"
                  required
                />
                <span
                  className="absolute right-3 top-3.5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <div style={{ color: isButtonOn ? "" : "white" }}>
                      <FaEyeSlash></FaEyeSlash>
                    </div>
                  ) : (
                    <div style={{ color: isButtonOn ? "" : "white" }}>
                      <FaEye></FaEye>
                    </div>
                  )}
                </span>
              </div>
              {passValidation === 1 && (
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">Oops!</span> Password should be
                  more than 6 characters.
                </p>
              )}
              {passValidation === 2 && (
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">Oops!</span> Password should
                  have an uppercase letter and a special character.
                </p>
              )}
            </div>
            <div className="flex items-start my-5">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  aria-describedby="terms"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  style={{ color: isButtonOn ? "#455A64" : "white" }}
                  htmlFor="terms"
                  className="font-light"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-[#D72323] hover:underline"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full text-white bg-[#D72323] hover:bg-[white] hover:outline hover:text-[#D72323] font-medium px-5 py-3 text-center my-2"
            />
            <h1
              style={{ color: isButtonOn ? "#455A64" : "white" }}
              className="text-center text-lg"
            >
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#D72323]">Sign In here</span>
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
