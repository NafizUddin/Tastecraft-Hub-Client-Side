import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { MyContext } from "../../Main Layout/MainLayout";
import { useContext, useEffect } from "react";
import Rating from "react-rating";
import { BsArrowLeft, BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Footer from "../../Components/Footer/Footer";
import useAuth from "../../Custom Hooks/useAuth";
import Swal from "sweetalert2";

const ItemDetails = () => {
  const selectedItems = useLoaderData();

  const { user } = useAuth();

  const userEmail = user?.email;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isButtonOn } = useContext(MyContext);
  const navigate = useNavigate();

  const cartItems = { selectedItems, userId, userEmail };

  const handleAddToCart = () => {
    fetch("https://tastecraft-hub-server-side.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "You added this item to Cart", "success");
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-7 ml-8">
        <div onClick={() => navigate(-1)} className="flex items-center gap-3">
          <BsArrowLeft className="text-[#D72323]"></BsArrowLeft>
          <span className="text-2xl text-[#D72323]">Go Back</span>
        </div>
      </div>
      {/* Food Details */}
      <div className="mt-8 mx-6 xl:mx-0">
        <h1 className="text-center text-5xl font-bold text-[#D72323]">
          Details of {selectedItems.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 my-10">
          <div className="lg:col-span-4">
            <img
              src={selectedItems.photo}
              className="h-[430px] object-fill w-full"
            />
          </div>
          <div className="lg:col-span-2 lg:ml-6 text-center lg:text-left space-y-5">
            <h1
              style={{ color: isButtonOn ? "black" : "white" }}
              className="text-3xl font-semibold pb-3"
            >
              {selectedItems.name}
            </h1>
            <p
              style={{ color: isButtonOn ? "black" : "white" }}
              className="text-2xl font-medium"
            >
              From: <span className="ml-3">{selectedItems.brand}</span>
            </p>
            <p
              style={{ color: isButtonOn ? "black" : "white" }}
              className="text-2xl font-medium"
            >
              Type: <span className="ml-3">{selectedItems.type}</span>
            </p>
            <p
              style={{ color: isButtonOn ? "black" : "white" }}
              className="text-2xl font-medium"
            >
              Price: <span className="ml-3">${selectedItems.price}</span>
            </p>
            <div
              style={{ color: isButtonOn ? "black" : "white" }}
              className="text-2xl flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-2xl font-medium">Rating: </span>
              <span className="mt-1">
                <Rating
                  initialRating={selectedItems.rating}
                  fullSymbol={
                    <BsFillStarFill
                      style={{ color: isButtonOn ? "#FF9529" : "white" }}
                    ></BsFillStarFill>
                  }
                  emptySymbol={
                    <BsStar
                      style={{ color: isButtonOn ? "#FF9529" : "white" }}
                    ></BsStar>
                  }
                  readonly
                />
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex gap-4 items-center lg:items-start xl:items-center">
                <div className="text-2xl text-green-600 lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-xl text-green-600">In Stock</p>
              </div>
              <div className="flex gap-4 items-center lg:items-start xl:items-center mt-3">
                <div className="text-2xl text-green-600 lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-xl text-green-600">
                  Free Delivery Available
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-6 py-3 bg-[#D72323] rounded-lg text-white hover:bg-[white] hover:outline hover:text-[#D72323]"
              >
                <BsCart3></BsCart3> <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
        {/* Description */}
        <h1 className="text-center text-4xl font-bold text-[#D72323]">
          Description
        </h1>
        <p
          style={{ color: isButtonOn ? "black" : "white" }}
          className="mt-5 text-lg mb-16"
        >
          {selectedItems.description}
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://demo2.themelexus.com/foodo2/wp-content/uploads/2023/06/demo-product03.jpg"
            className="mb-14 xl:w-full"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ItemDetails;
