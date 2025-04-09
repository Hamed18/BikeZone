import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import About from "@/pages/About";
import AdminDash from "@/pages/admin/AdminDash";
import ManageOrders from "@/pages/admin/ManageOrders";
import ManageProducts from "@/pages/admin/ManageProducts";
import ManageUsers from "@/pages/admin/ManageUsers";
// import AllProducts2 from "@/pages/AllProduct2";
import AllProducts from "@/pages/AllProducts";
import Home from "@/pages/home/Home";
import ProductDetails from "@/pages/home/Product/ProductDetails";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserDash from "@/pages/user/UserDash";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products/",
        element: <AllProducts />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dash",
        element: <AdminDash />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dash",
        element: <UserDash />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
