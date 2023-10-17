import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main Layout/MainLayout";
import ErrorPage from "../Error Page/ErrorPage";
import Home from "../Pages/Home/Home";

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
    ],
  },
]);

export default MainRoute;
