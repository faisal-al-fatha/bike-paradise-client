import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/about",
        element: <About></About>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  }
]);
