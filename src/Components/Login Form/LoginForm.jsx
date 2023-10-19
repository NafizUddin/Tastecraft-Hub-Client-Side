import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MyContext } from "../../Main Layout/MainLayout";

const LoginForm = () => {
  const { isButtonOn } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            style={{ color: isButtonOn ? "#D72323" : "white" }}
            className="text-3xl font-semibold leading-tight tracking-tight border-b pt-4 pb-6"
          >
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6">
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
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
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
                  className="bg-[#F3F3F3] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
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
            </div>
            <div className="flex items-center justify-between my-5">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    style={{
                      backgroundColor: isButtonOn ? "white" : "#455A64",
                    }}
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300"
                    aria-describedby="remember"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    style={{ color: isButtonOn ? "#455A64" : "white" }}
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                style={{ color: isButtonOn ? "#455A64" : "white" }}
                href="#"
                className="text-sm font-medium hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="submit"
              value="Sign In"
              className="w-full text-white bg-[#D72323] hover:bg-[white] hover:outline hover:text-[#D72323] font-medium px-5 py-3 text-center my-2"
            />
          </form>
          <div className="flex items-center justify-between">
            <hr className="w-36" />
            <span className="text-[#002642] text-lg font-medium">OR</span>
            <hr className="w-36" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button>
              <FcGoogle className="text-3xl"></FcGoogle>
            </button>
            <button>
              <BsGithub
                style={{ color: isButtonOn ? "" : "white" }}
                className="text-3xl"
              ></BsGithub>
            </button>
          </div>
          <h1
            style={{ color: isButtonOn ? "" : "white" }}
            className="text-center md:text-lg"
          >
            Don&apos;t have an account?{" "}
            <Link to="/register">
              <span className="text-[#D72323]">Create free account</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
