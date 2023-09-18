import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Error from "./Components/Error/Error.jsx";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/login",
    element: <Login></Login>,
    // errorElement: <Error></Error>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    // errorElement: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
