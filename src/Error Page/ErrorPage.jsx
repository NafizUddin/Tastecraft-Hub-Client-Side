import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-14 lg:my-0">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/rmJnb84/Screenshot-2023-10-17-220923-removebg-preview.png"
            className="max-w-sm md:max-w-md lg:max-w-xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-center">
              404! <br />
              <span className="text-[#D72323]">OOOPPS...!</span>
            </h1>
            <p className="py-6 text-center text-3xl">
              Sorry! The page cannot be found
            </p>
            <div className="flex justify-center items-center">
              <Link to="/">
                <button className="bg-[#D72323] px-4 py-3 rounded-lg text-white">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
