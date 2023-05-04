import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Category from "../Pages/Home/Home/Category/Category";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blogs/Blog";
import Register from "../Pages/Register/Register";
import SecretRouter from "../PrivetRoute/SecretRoute/SecretRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories/:id",
        element: (
          <SecretRouter>
            <Category></Category>
          </SecretRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://master-chef-india-server-nissan1998.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
