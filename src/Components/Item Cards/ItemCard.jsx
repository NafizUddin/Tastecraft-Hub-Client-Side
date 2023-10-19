import PropTypes from "prop-types";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { useContext } from "react";
import { MyContext } from "../../Main Layout/MainLayout";

const ItemCard = ({ item }) => {
  const { name, type, price, photo, rating } = item;
  const { isButtonOn } = useContext(MyContext);

  return (
    <div
      style={{ backgroundColor: isButtonOn ? "white" : "#ff8080" }}
      className="card shadow-xl"
    >
      <figure>
        <img src={photo} alt="" className="h-[280px] w-full object-fill" />
      </figure>
      <div className="card-body flex flex-col space-y-4">
        <h1
          style={{ color: isButtonOn ? "black" : "white" }}
          className="text-center text-3xl font-bold"
        >
          {name}
        </h1>
        <p
          style={{ color: isButtonOn ? "black" : "white" }}
          className="text-2xl"
        >
          Type: {type}
        </p>
        <p
          style={{ color: isButtonOn ? "black" : "white" }}
          className="text-2xl"
        >
          Price: ${price}
        </p>
        <div
          style={{ color: isButtonOn ? "black" : "white" }}
          className="text-2xl flex items-center gap-3"
        >
          <span>Rating: </span>
          <span className="mt-1">
            <Rating
              initialRating={rating}
              fullSymbol={
                <BsFillStarFill
                  style={{ color: isButtonOn ? "#FF9529" : "#424b58" }}
                ></BsFillStarFill>
              }
              emptySymbol={
                <BsStar
                  style={{ color: isButtonOn ? "#FF9529" : "#424b58" }}
                ></BsStar>
              }
              readonly
            />
          </span>
        </div>

        <div className="card-actions justify-center xl:gap-10">
          <button className="px-6 py-3 bg-[#D72323] rounded-lg text-white hover:bg-[white] hover:outline hover:text-[#D72323]">
            View Details
          </button>
          <button className="px-6 py-3 bg-[#D72323] rounded-lg text-white hover:bg-[white] hover:outline hover:text-[#D72323]">
            Update Item
          </button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
