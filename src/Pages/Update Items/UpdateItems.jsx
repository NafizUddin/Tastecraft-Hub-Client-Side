import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import redLogo from "../../assets/logo.png";
import whiteLogo from "../../assets/whitelogo.png";
import { MyContext } from "../../Main Layout/MainLayout";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { BiArrowBack } from "react-icons/bi";

const UpdateItems = () => {
  const selectedItems = useLoaderData();
  console.log(selectedItems);

  const { isButtonOn } = useContext(MyContext);
  const [selectedBrand, setSelectedBrand] = useState(selectedItems.brand);
  const [selectedType, setSelectedType] = useState(selectedItems.type);
  const [selectedRating, setSelectedRating] = useState(selectedItems.rating);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUpdateItems = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = selectedBrand;
    const type = selectedType;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = selectedRating;
    const description = form.description.value;
    const updatedItem = {
      name,
      brand,
      type,
      price,
      photo,
      rating,
      description,
    };
    console.log(updatedItem);

    fetch(
      `https://tastecraft-hub-server-side.vercel.app/items/${selectedItems._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "You have updated the item", "success");
          form.reset();
        }
      });
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
        <h1 className="text-[#D72323] text-center text-4xl">
          Update Existing Items
        </h1>
        {/* style={{ backgroundColor: isButtonOn ? "white" : "#0a0f18" }} */}
        <p className="text-center py-3 mx-8">
          Elevate Your Culinary Experience with{" "}
          <span className="text-[#D72323]">Tastecraft Hub</span>
        </p>
        <p className="text-center lg:max-w-2xl lg:mx-auto mx-6">
          {" "}
          We&apos;re dedicated to delivering the highest quality ingredients and
          beverages to elevate your culinary creations. Your satisfaction is our
          priority, and we look forward to serving your culinary needs with
          excellence.
        </p>
        <form
          onSubmit={handleUpdateItems}
          className="w-11/12 mx-auto mt-8 mb-5"
        >
          <div className="flex gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                className="text-lg font-semibold"
                htmlFor="name"
              >
                Item Name
              </label>{" "}
              <br />
              <input
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                type="text"
                required
                name="name"
                defaultValue={selectedItems.name}
                placeholder="Enter Item Name"
                className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex-1">
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                className="text-lg font-semibold"
                htmlFor="chef"
              >
                Brand Name
              </label>{" "}
              <br />
              <select
                required
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                className="my-2 border border-[#D72323] text-sm focus:ring-red-500 focus:border-red-500 block w-full py-3 px-4 rounded"
                defaultValue={selectedItems.brand}
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
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                className="text-lg font-semibold"
                htmlFor="chef"
              >
                Item Type
              </label>{" "}
              <br />
              <select
                required
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                className="my-2 border border-[#D72323] text-sm focus:ring-red-500 focus:border-red-500 block w-full py-3 px-4 rounded"
                defaultValue={selectedItems.type}
              >
                <option value="">Select a item</option>
                <option value="Burgers">Burgers</option>
                <option value="Pizza">Pizza</option>
                <option value="Chicken">Chicken</option>
                <option value="Beverages">Beverages</option>
                <option value="Desserts">Desserts</option>
                <option value="Coffee">Coffee</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Meal">Meal</option>
                <option value="Pasta">Pasta</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                className="text-lg font-semibold"
                htmlFor="name"
              >
                Price
              </label>{" "}
              <br />
              <input
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                type="text"
                name="price"
                required
                defaultValue={selectedItems.price}
                placeholder="Enter Item Price"
                className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
          <div className="flex gap-7 px-8 mb-4">
            <div className="flex-1">
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                className="text-lg font-semibold"
                htmlFor="name"
              >
                Image URL
              </label>{" "}
              <br />
              <input
                required
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                type="text"
                name="photo"
                defaultValue={selectedItems.photo}
                placeholder="Enter Photo URL"
                className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="flex-1">
              <label
                style={{ color: isButtonOn ? "#D72323" : "white" }}
                className="text-lg font-semibold"
                htmlFor="chef"
              >
                Item Rating
              </label>{" "}
              <br />
              <select
                required
                onChange={(e) => setSelectedRating(e.target.value)}
                style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
                className="my-2 border border-[#D72323] text-sm focus:ring-red-500 focus:border-red-500 block w-full py-3 px-4 rounded"
                defaultValue={selectedItems.rating}
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
              style={{ color: isButtonOn ? "#D72323" : "white" }}
              className="text-lg font-semibold"
              htmlFor="description"
            >
              Details
            </label>
            <input
              required
              style={{ backgroundColor: isButtonOn ? "white" : "#676767" }}
              type="text"
              name="description"
              defaultValue={selectedItems.description}
              placeholder="Enter Item Description"
              className="w-full py-3 px-4 my-2 rounded border border-[#D72323] focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="pb-6 text-white w-1/3 md:w-1/5 mx-auto">
            <input
              type="submit"
              value="Update Item"
              className="bg-[#D72323] w-full py-3 text-xl md:text-2xl rounded-lg hover:bg-[#b41a1a]"
            />
          </div>
        </form>
        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#D72323] text-white py-3 px-5 rounded-lg flex items-center gap-2 hover:bg-[#b41a1a]"
          >
            <BiArrowBack></BiArrowBack> Go Back
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateItems;
