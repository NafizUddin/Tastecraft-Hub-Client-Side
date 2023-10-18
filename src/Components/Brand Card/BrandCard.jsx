import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const BrandCard = ({ brand }) => {
  const { brandName, brandImage } = brand;
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 rounded-xl bg-clip-border shadow-lg hover:scale-105 hover:cursor-pointer">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border flex justify-center items-center">
          <img src={brandImage} className="w-full h-[250px]" />
        </div>
        <div className="p-6 text-center">
          <h4 className="block my-2 text-3xl font-semibold">{brandName}</h4>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7">
          <div className="cursor-pointer text-[#0165E1] text-xl">
            <FaFacebook></FaFacebook>
          </div>
          <div className="ml-3 cursor-pointer text-[#0084b4] text-xl">
            <FaTwitter></FaTwitter>
          </div>
          <div className="ml-3 cursor-pointer text-[#C13584] text-xl">
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
