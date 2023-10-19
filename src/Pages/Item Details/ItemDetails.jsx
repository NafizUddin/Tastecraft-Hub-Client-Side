import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { MyContext } from "../../Main Layout/MainLayout";
import { useContext } from "react";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const ItemDetails = () => {
  const selectedItems = useLoaderData();
  const { isButtonOn } = useContext(MyContext);
  const navigate = useNavigate();
  console.log(selectedItems);
  return (
    <div>
      <Navbar></Navbar>
      {/* Food Details */}
      <div className="mt-5">
        <div onClick={() => navigate(-1)} className="flex items-center gap-3">
          <BsArrowLeft></BsArrowLeft>
          <span className="text-3xl">Go Back</span>
        </div>
      </div>
      <div className="mt-12 mx-6 xl:mx-0">
        <h1 className="text-center text-5xl font-bold text-[#D72323]">
          Details of {selectedItems.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mt-10">
          <div className="lg:col-span-4">
            <img
              src={selectedItems.photo}
              className="h-[400px] object-fill w-full"
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
              Food Producer: <span className="ml-3">{selectedItems.brand}</span>
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
              className="text-2xl flex items-center gap-3"
            >
              <span>Rating: </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
