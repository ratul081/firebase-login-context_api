import Home from "../Components/Home";
import Main from "../layers/Main";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Profile from "../Components/Profile";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/profile",
        element:<PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>
      }
    ],
  },
]);
export default router;
