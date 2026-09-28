import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cabins from "../pages/Cabins";
import Offerings from "../pages/Offerings";
import Membership from "../pages/Membership";
import Harvest from "../pages/Harvest";
import Wholesale from "../pages/Wholesale";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cabins", element: <Cabins /> },
      { path: "/offerings", element: <Offerings /> },
      { path: "/membership", element: <Membership/> },
      { path: "/harvest", element: <Harvest /> },
      { path: "/wholesale", element: <Wholesale /> },
    ],
  },
]);
