import { Outlet } from "react-router-dom";

import React from "react";
import Header from "./doc/Header";

const Doc: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Doc;
