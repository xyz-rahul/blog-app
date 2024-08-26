import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NewPost from "./pages/NewPost";
import NotFound403 from "./pages/NotFound403";

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
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: <NotFound403 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
