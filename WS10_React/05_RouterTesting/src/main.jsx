import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./components/Root";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
