import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main Layout/MainLayout";
import ErrorPage from "../Error Page/ErrorPage";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/My Cart/MyCart";
import AddItems from "../Pages/Add Items/AddItems";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://tastecraft-hub-server-side.vercel.app/brands"),
      },
      {
        path: "/addItems",
        element: <AddItems></AddItems>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default MainRoute;
