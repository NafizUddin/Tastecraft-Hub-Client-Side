import { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { MyContext } from "../../Main Layout/MainLayout";
import Footer from "../../Components/Footer/Footer";
import redLogo from "../../assets/logo.png";
import whiteLogo from "../../assets/whitelogo.png";

const AddItems = () => {
  const { isButtonOn } = useContext(MyContext);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddItems = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = selectedBrand;
    const type = selectedType;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = selectedRating;
    const description = form.description.value;
    const item = {
      name,
      brand,
      type,
      price,
      photo,
      rating,
      description,
    };
    console.log(item);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{ color: isButtonOn ? "black" : "white" }}
        className="mt-32 lg:mt-14"
      >
        {isButtonOn ? (
          <div className="flex justify-center items-center mb-4">
            <img src={redLogo} className="w-[300px] block md:hidden"></img>
          </div>
        ) : (
          <div className="flex justify-center items-center mb-4">
            <img src={whiteLogo} className="w-[300px] block md:hidden"></img>
          </div>
        )}
        <h1 className="text-[#D72323] text-center text-4xl">Add New Items</h1>
        {/* style={{ backgroundColor: isButtonOn ? "white" : "#0a0f18" }} */}
        <p className="text-center py-3 mx-8">
          Elevate Your Culinary Experience with{" "}
          <span className="text-[#D72323]">Tastecraft Hub</span>
        </p>
        <p className="text-center lg:max-w-2xl lg:mx-auto mx-6">
          {" "}
          We understand that great meals begin with exceptional ingredients. As
          your dedicated food and beverage supplier, we take pride in providing
          top-quality products that meet the diverse needs of your culinary
          ventures.
        </p>
        <form onSubmit={handleAddItems} className="w-11/12 mx-auto my-8">
          <div className="flex gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-[#D72323]"
                htmlFor="name"
              >
                Item Name
              </label>{" "}
              <br />
              <input
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                type="text"
                name="name"
                placeholder="Enter Item Name"
                className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-[#D72323]"
                htmlFor="chef"
              >
                Brand Name
              </label>{" "}
              <br />
              <select
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                className="my-2 border border-[#D72323] text-sm focus:ring-red-500 focus:border-red-500 block w-full py-3 px-4 rounded"
              >
                <option value="">Select a brand</option>
                <option value="McDonald's">McDonald&apos;s</option>
                <option value="Domino's">Domino&apos;s</option>
                <option value="KFC">KFC</option>
                <option value="PepsiCo">PepsiCo</option>
                <option value="Burger King">Burger King</option>
                <option value="Starbucks">Starbucks</option>
              </select>
            </div>
          </div>
          <div className="flex gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-[#D72323]"
                htmlFor="chef"
              >
                Item Type
              </label>{" "}
              <br />
              <select
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                className="my-2 border border-[#D72323] text-sm focus:ring-red-500 focus:border-red-500 block w-full py-3 px-4 rounded"
              >
                <option value="">Select a item</option>
                <option value="Burgers">Burgers</option>
                <option value="Pizza">Pizza</option>
                <option value="Chicken">Chicken</option>
                <option value="Beverages">Beverages</option>
                <option value="Sides">Sides</option>
                <option value="Coffee">Coffee</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-[#D72323]"
                htmlFor="name"
              >
                Price
              </label>{" "}
              <br />
              <input
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                type="text"
                name="price"
                placeholder="Enter Item Price"
                className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
          <div className="flex gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-[#D72323]"
                htmlFor="name"
              >
                Image URL
              </label>{" "}
              <br />
              <input
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex-1">
              <label
                className="text-lg font-semibold text-[#D72323]"
                htmlFor="chef"
              >
                Item Rating
              </label>{" "}
              <br />
              <select
                onChange={(e) => setSelectedRating(e.target.value)}
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                className="my-2 border border-[#D72323] text-sm focus:ring-red-500 focus:border-red-500 block w-full py-3 px-4 rounded"
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="px-8 mb-4">
            <label
              className="text-lg font-semibold text-[#D72323]"
              htmlFor="description"
            >
              Details
            </label>
            <input
              style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
              type="text"
              name="description"
              placeholder="Enter Item Description"
              className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="pb-12 text-white w-1/3 md:w-1/5 mx-auto">
            <input
              type="submit"
              value="Add Item"
              className="font-rancho bg-[#D72323] w-full py-3 text-xl md:text-2xl rounded-lg hover:bg-[#b41a1a]"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddItems;
