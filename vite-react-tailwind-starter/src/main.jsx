
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListingDetail from "./pages/ListingDetail";
import HostDashboard from "./pages/HostDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "listing/:id", element: <ListingDetail /> },
      { path: "host/dashboard", element: <HostDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
