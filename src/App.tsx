import { Outlet } from "react-router-dom";
import Header from "./section/Header";
import Footer from "./section/Footer";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
