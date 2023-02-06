import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Signup from "./views/Signup";
import Login from "./views/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/surveys',
    element: <Surveys />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
])

export default router;
