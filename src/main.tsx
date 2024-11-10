import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Product from "./Component/Product.jsx";
import {Solution} from "./Component/Solution.jsx";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const AppRouter =createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
path:'/product',
element:<Product/>

  },
  {
    path:'/solution',
    element:<Solution/>
    
      }

]
}
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}></RouterProvider>
  </React.StrictMode>,
);
