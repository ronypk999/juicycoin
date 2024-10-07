import React from "react";
import Marquee from "react-fast-marquee";
import favicon from "/favicon.png";
import logo from "../assets/key.png";
import { useRef, useState } from "react";
import menu from "../assets/menu.svg";
import menuClose from "../assets/menu-close.svg";
import { useInfoContext } from "../hook/ContextHook";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const {
    scrollToFeature,
    scrollToHealth,
    scrollToTop,
    scrollToWhitepaper,
    scrollToBuy,
    roadMapRef,
    scrollTo,
  } = useInfoContext();
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);

  const stickyElement = useRef<HTMLDivElement>(null);

  const menuHandle = () => {
    if (hide) {
      document.body.style.overflow = "hidden";
      setHide2(!hide);
      setTimeout(() => {
        setHide(!hide);
      }, 100);
    } else {
      document.body.style.overflow = "";
      setHide(!hide);

      setHide2(!hide);
    }
  };
  return (
    <>
     <ToastContainer></ToastContainer>
      <div className="relative z-10 bg-[#2a4c75] py-2 md:pb-4 pt-2">
        <Marquee autoFill={true}>
          <span className="mr-3 uppercase font-bold text-white">
            VITAMINIZE & ENERGIZE
          </span>
          <img src={favicon} className="w-6 md:w-8 mr-3" />
        </Marquee>
      </div>

      <div
        ref={stickyElement}
        className="max-w-[1600px] mx-3 lg:mx-auto sticky top-12 mb-[-85px] mt-[-11px] 
     z-10 nav    text-[#2a4c75] lg:text-black lg:px-6"
      >
        <div className="bg-white py-3 lg:py-6 px-3 shadow-nav rounded-[20px] flex items-center gap-12">
          <div className="flex px-3 justify-between items-center w-full lg:w-fit">
            <div className="">
              <a href="/"><img
                src={logo}
                onClick={scrollToTop}
                className="w-40 lg:w-64 cursor-pointer"
              /></a>
            </div>
            <div className="lg:hidden">
              <div onClick={menuHandle} className="text-3xl">
                <img src={menu} />
              </div>
            </div>
          </div>
          <div
            className={`${hide ? "-right-[100rem]" : "-right-3"} ${
              hide2 && "hidden"
            } absolute bg-white h-screen w-screen nav lg:h-fit p-3 space-y-12 lg:space-y-0 lg:p-0 -top-12 bottom-0 lg:static lg:flex items-center w-full justify-around lg:justify-between lg:px-6 font-medium bg-md-none`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="lg:hidden">
              <div onClick={menuHandle} className="text-3xl flex justify-end">
                <img src={menuClose} />
              </div>
            </div>
            <div className="hidden lg:flex flex-col lg:flex-row items-start gap-6 w-full justify-center">
              <button className="uppercase" onClick={scrollToFeature}>
                Features
              </button>
              <button className="uppercase" onClick={scrollToHealth}>
                Healthcare Foundation
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  scrollTo(roadMapRef);
                }}
              >
                Roadmap
              </button>
              <button className="uppercase" onClick={scrollToWhitepaper}>
                WhitePaper
              </button>
            </div>
            <div className="lg:hidden flex flex-col lg:flex-row items-start text-2xl gap-6 uppercase">
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollToFeature();
                }}
              >
                Features
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollToHealth();
                }}
              >
                Healthcare Foundation
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollTo(roadMapRef);
                }}
              >
                Roadmap
              </button>
              <button
                className="uppercase"
                onClick={() => {
                  menuHandle();
                  scrollToWhitepaper();
                }}
              >
                WhitePaper
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 px-6">
              {/* <img src={logo} className="w-40 mx-auto" /> */}
              {!localStorage.getItem("hash") ? <>
                <Link
                to="/login"
                className="hidden bg-[#f96d6d] lg:block btn text-base px-6  border-2 border-black rounded-lg text-white py-2 uppercase"
              >
                Sign In
              </Link>
              <Link
               to="/signup"
                className="hidden bg-[#f96d6d] lg:block btn text-base px-6  border-2 border-black rounded-lg text-white py-2 uppercase"
              >
                Sign Up
              </Link>
              
              <Link
                onClick={() => {
                  menuHandle();
                }}
                 to="/login"
                className="lg:hidden bg-green-600 btn text-base px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
              >
               Sign In
              </Link>

              <Link
                onClick={() => {
                  menuHandle();
                
                }}
                 to="/signup"
                className="lg:hidden bg-green-600 btn text-base px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
              >
                Sign Up
              </Link>
              </>:<> <Link
                to="/dashboard"
                className="hidden bg-[#f96d6d] lg:block btn text-base px-6  border-2 border-black rounded-lg text-white py-2 uppercase"
              >
               Dashboard
              </Link>
              <Link
               to="/dashboard/logout"
                className="hidden bg-[#f96d6d] lg:block btn text-base px-6  border-2 border-black rounded-lg text-white py-2 uppercase"
              >
               Logout
              </Link>
              
              <Link
                onClick={() => {
                  menuHandle();
                }}
                 to="/dashboard"
                className="lg:hidden bg-green-600 btn text-base px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
              >
               Dashboard
              </Link>

              <Link
                onClick={() => {
                  menuHandle();
                
                }}
                to="/dashboard/logout"
                className="lg:hidden bg-green-600 btn text-base px-12 border-2 border-black rounded-lg text-xl text-white py-2 uppercase"
              >
                Logout
              </Link></>}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
