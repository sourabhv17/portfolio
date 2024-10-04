import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import ErrorPage from "./utils/ErrorPage";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <ErrorPage /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contacts", element: <Contacts /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
