import PropTypes from "prop-types";
import Rating from "react-rating";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const ItemCard = ({ item }) => {
  const { name, brand, type, price, photo, rating, description } = item;
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={photo} alt="" className="h-[280px] w-full object-fill" />
      </figure>
      <div className="card-body">
        <Rating
          initialRating={rating}
          fullSymbol={<BsFillStarFill></BsFillStarFill>}
          emptySymbol={<BsStar></BsStar>}
          readonly
        />
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
