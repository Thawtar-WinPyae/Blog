import App from "../App";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import {
    createBrowserRouter,
  } from "react-router-dom";
import BlogDetail from "../pages/BlogDetail";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path: "/", 
            element: <Home></Home> ,
        },
        {
            path: "/about", 
            element: <About></About>
        },
        {
          path: "/contact", 
          element: <Contact></Contact>
        },
        {
          path: "/blogs/:id", 
          element: <BlogDetail></BlogDetail>
        },
        {
          path: "*", 
          element: <NotFound></NotFound>
        },
      ]
    },
  ]);

  export default router;
  