import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'login',
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router;