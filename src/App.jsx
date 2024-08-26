import React, { useContext } from "react";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NewPost from "./pages/NewPost";
import NotFound403 from "./pages/NotFound403";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { AuthenticationContext } from "./context/Authentication";

export default function App() {
  const { user } = useContext(AuthenticationContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/new-post",
          element: <NewPost />,
          loader: () => (!user ? redirect("/") : null),
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <NotFound403 />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
