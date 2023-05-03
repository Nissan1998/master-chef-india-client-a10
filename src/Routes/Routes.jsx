import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Category from "../Pages/Home/Home/Category/Category";
import RecipeDetails from "../Layout/RecipeDetails";
import ChefDetails from "../Pages/Details/Details/ChefDetails";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/categories/:id",
    element: <Category></Category>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
export default router;
