import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { MyContext } from "../../Main Layout/MainLayout";
import { useContext, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartItems = useLoaderData();
  console.log(cartItems);
  const { isButtonOn } = useContext(MyContext);

  const [displayItems, setDisplayItems] = useState(cartItems);

  const handleDeleteItem = (item) => {
    const id = item?._id;
    const email = item?.userEmail;
    console.log(email, id);

    fetch(`https://tastecraft-hub-server-side.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount > 0) {
              const remaining = cartItems?.filter((item) => item._id !== id);
              setDisplayItems(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          }
        });
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10 mx-6 xl:mx-0">
        <h1 className="text-center text-5xl font-bold text-[#D72323]">
          Your Cart Items
        </h1>
        <div className="overflow-x-auto mt-8 pb-20">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>
                  <h1
                    style={{ color: isButtonOn ? "" : "white" }}
                    className="md:text-xl"
                  >
                    Image
                  </h1>
                </th>
                <th>
                  <h1
                    style={{ color: isButtonOn ? "" : "white" }}
                    className="md:text-xl"
                  >
                    Name
                  </h1>
                </th>
                <th>
                  <h1
                    style={{ color: isButtonOn ? "" : "white" }}
                    className="md:text-xl"
                  >
                    Price
                  </h1>
                </th>
                <th>
                  <h1
                    style={{ color: isButtonOn ? "" : "white" }}
                    className="md:text-xl"
                  >
                    Action
                  </h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {displayItems?.map((singleItem, index) => (
                <tr key={singleItem._id}>
                  <th>
                    <span style={{ color: isButtonOn ? "" : "white" }}>
                      {index + 1}
                    </span>
                  </th>
                  <td>
                    <img
                      src={singleItem?.selectedItems?.photo}
                      className="w-28"
                    />
                  </td>
                  <td>
                    <h1
                      style={{ color: isButtonOn ? "" : "white" }}
                      className="md:text-xl"
                    >
                      {singleItem?.selectedItems?.name}
                    </h1>
                  </td>
                  <td>
                    <h1
                      style={{ color: isButtonOn ? "" : "white" }}
                      className="md:text-xl"
                    >
                      ${singleItem?.selectedItems?.price}
                    </h1>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(singleItem)}
                      className="px-3 py-2 rounded-full bg-[#D72323] text-white ml-1 md:ml-4 text-xs md:text-base"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyCart;
