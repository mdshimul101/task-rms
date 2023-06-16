import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../components/About/About/About";
import Cart from "../../components/Cart/Cart/Cart";
import Contact from "../../components/Contact/Contact";
import Food from "../../components/Food/Food/Food";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/food",
        element: <Food></Food>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
