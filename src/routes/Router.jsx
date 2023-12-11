import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
    ]
  }
]);

export default router;
