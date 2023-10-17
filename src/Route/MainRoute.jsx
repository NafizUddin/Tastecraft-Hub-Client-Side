import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main Layout/MainLayout";
import ErrorPage from "../Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Add Product/AddProduct";
import MyCart from "../Pages/My Cart/MyCart";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default MainRoute;
