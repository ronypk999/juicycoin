import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ContextProvider from "../provider/ContextProvider";
import Doc from "../Doc";
import Welcome from "../doc/welcome";
import NotFound from "../NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserNotLogged from "../UserNotLogged";
import Dashboard from "../pages/Dashboard";
import UserLogged from "../UserLogged";

export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App></App>
      </ContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/whitepaper",
    element: (
      <ContextProvider>
        <Doc></Doc>
      </ContextProvider>
    ),
    children: [
      {
        path: "/whitepaper",
        element: <Welcome></Welcome>,
      },
    ],
  },{
    path: "/login",
    element: (
      <ContextProvider> 
        <UserNotLogged></UserNotLogged>
        </ContextProvider> 
    ),
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },{
    path: "/signup",
    element: (
    <ContextProvider>  <UserNotLogged></UserNotLogged></ContextProvider>
    ),
    children: [
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },{
    path: "/dashboard",
    element: (
    <ContextProvider>  <UserLogged></UserLogged></ContextProvider>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
