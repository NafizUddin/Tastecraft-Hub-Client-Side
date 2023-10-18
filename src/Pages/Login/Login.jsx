import { useEffect } from "react";
import AuthNavbar from "../../Components/Navbar Auth/AuthNavbar";
import login from "../../assets/log-in.png";
import LoginForm from "../../Components/Login Form/LoginForm";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <div className="flex flex-col lg:flex-row gap-10 py-10">
        <div className="flex-1">
          <div className="flex justify-center items-center lg:py-14">
            <img src={login} alt="" className="" />
          </div>
        </div>
        <div className="flex-1">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
