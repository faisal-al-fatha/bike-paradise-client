import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllUsers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllUsers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import MyProducts from "../Pages/Dashboard/MyProduct/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Home/About/About";
import Categories from "../Pages/Home/Categories/Categories";
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
        element: <Signup></Signup>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/category",
        element: <Categories></Categories>,
      },
      {
        path: '/category/:categoryId',
        loader: async ({ params }) => fetch(`https://bike-paradise-server-faisal-al-fatha.vercel.app/category/${params.categoryId}`),
        element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
      }
    ],
  },
  {
    path: "/dashboard",
    element: 
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/dashboard/buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/bookings",
        element: <MyBookings></MyBookings>
      },
    ],
  },
]);
