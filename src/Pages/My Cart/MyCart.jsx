import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const MyCart = () => {
  const cartItems = useLoaderData();
  console.log(cartItems);
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default MyCart;
