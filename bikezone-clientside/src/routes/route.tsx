import App from "@/App";
import Home from "@/page/home/Home";
import Login from "@/page/Login";
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
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);
