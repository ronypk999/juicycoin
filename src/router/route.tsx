import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import ContextProvider, { apiUrl } from "../provider/ContextProvider";
import Doc from "../Doc";
import Welcome from "../doc/welcome";
import NotFound from "../NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserNotLogged from "../UserNotLogged";
import Dashboard from "../pages/Dashboard";
import UserLogged from "../UserLogged";
import axios from "axios";

import { toast } from "react-toastify";
import History from "../pages/History";

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
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader:  async () => {
          const response = await axios.post(apiUrl,{
            // Data to be sent in the POST request
            type:'account',
            hash:localStorage.getItem("hash") || null
          });
      
          if(!response.data.fail){
           return response.data.data;
            
           
          }else{
            localStorage.removeItem("hash");
            toast.error(response.data.data)
            setTimeout(() => {
              <Navigate to="/login"></Navigate>
            }, 5000);
          
          }
        }
      }, {
        path: "/dashboard/history",
        element: <History></History>,
        loader:  async () => {
          const response = await axios.post(apiUrl,{
            // Data to be sent in the POST request
            type:'history',
            hash:localStorage.getItem("hash") || null
          });
      
          if(!response.data.fail){
            console.log(response.data.data)
           return response.data.data;

            
           
          }else{
            localStorage.removeItem("hash");
            toast.error(response.data.data)
            setTimeout(() => {
              <Navigate to="/login"></Navigate>
            }, 5000);
          
          }
        }
      },{
        path: "/dashboard/logout",
        
        loader: ()=>{
          localStorage.removeItem("hash");
          return <Navigate to="/login"></Navigate>
        }
      },
    ],
  },
]);
