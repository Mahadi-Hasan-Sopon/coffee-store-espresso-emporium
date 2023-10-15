import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Error from "../components/Error/Error";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://coffee-store-espresso-exporium-backend-ro4my39q4.vercel.app/coffees"
          ),
      },
      {
        path: "/coffees/new",
        element: <AddCoffee />,
      },
      {
        path: "/coffees/update/:coffeeId",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-espresso-exporium-backend-ro4my39q4.vercel.app/coffees/${params.coffeeId}`
          ),
      },
      {
        path: "/coffees/details/:coffeeId",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-espresso-exporium-backend-ro4my39q4.vercel.app/coffees/${params.coffeeId}`
          ),
      },
    ],
  },
]);

export default routes;
