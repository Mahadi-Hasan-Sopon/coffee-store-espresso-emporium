import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(""),
      },
      {
        path: "/coffees/new",
        element: <AddCoffee />,
      },
      {
        path: "/coffees/update/:coffeeId",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`${params.coffeeId}`),
      },
    ],
  },
]);

export default routes;
