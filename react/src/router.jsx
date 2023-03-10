import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout.jsx";
import Signup from "./views/Signup.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children : [
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/surveys',
        element: <Surveys />
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },


])

export default router;
