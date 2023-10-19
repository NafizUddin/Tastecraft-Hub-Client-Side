import { useEffect } from "react";
import AuthNavbar from "../../Components/Navbar Auth/AuthNavbar";
import RegisterForm from "../../Components/Register Form/RegisterForm";
import register from "../../assets/login.png";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <div className="flex flex-col lg:flex-row-reverse gap-10 py-10">
        <div className="flex-1">
          <div className="flex justify-center items-center lg:py-20">
            <img src={register} alt="" className="" />
          </div>
        </div>
        <div className="flex-1">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
