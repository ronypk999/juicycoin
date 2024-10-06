import { Outlet, useNavigate } from "react-router-dom";

import React from "react";
import Header from "./section/User/Header";

const UserLogged: React.FC = () => {
  const nav = useNavigate();
  if(!localStorage.getItem("hash")){
    
    setTimeout(() => {
      nav('/login');
    }, 100);
  }
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      
    </>
  );
};

export default UserLogged;
