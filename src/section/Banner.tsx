import React, { useState } from "react";

import desk from "../assets/banner/bg-desk.png";
import title from "../assets/banner/main_title.png";
import glass from "../assets/banner/juice_glass.png";
import { useInfoContext } from "../hook/ContextHook";

const Banner: React.FC = () => {
  const { buyRef } = useInfoContext();
  const [copySuccess, setCopySuccess] = useState<string>("Copy");
  const [copyText] = useState<string>(
    "B6h248NJkAcBAkaCnji889a26tCiGXGN8cxhEJ4dX391d"
  );

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => {
          setCopySuccess("Copy");
        }, 5000);
      })
      .catch((err) => {
        setCopySuccess("Error!");
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${desk})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pt-32 relative"
      >
        <div className="max-w-5xl mx-auto pt-16 pb-12">
          <img
            src={title}
            className="w-full max-w-2xl mx-auto px-3"
            alt="Title"
          />
          <img
            src={glass}
            className="mx-auto  md:pt-0 pt-24 px-12"
            alt="Glass"
          />
        </div>
      </div>
      <div ref={buyRef} className="pt-6 pb-12 px-3 md:px-6">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#F9C06B] p-3 rounded-box md:rounded-[40px]"
          onClick={copyToClipboard}
        >
          <div className="md:text-2xl lg:text-4xl flex flex-col items-center justify-center gap-3 text-[#45356F] ">
            <span className="text-white text-xl md:text-2xl lg:text-4xl">
              Send Sol to the address below
            </span>
            <span className="flex-1 break-all bg-[#F49F13] px-3 py-2 rounded-box">
              {" "}
              {copyText}
            </span>
            <p className="text-xs sm:text-sm md:text-xl">
              Note : Only send SOL(min 0.1 , max 100 SOL) from a solana wallet
            </p>
          </div>
          <button className="btn text-xl md:text-2xl rounded-full bg-[#88ABDA] border-4 border-[#112594] px-6 text-[#112594] hover:bg-blue-400">
            {copySuccess}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
